import React, { useState, useEffect, useMemo } from 'react'
import {
  Stack,
  Card,
  TextInput,
  Flex,
  Box,
  Button,
  Text,
  Dialog,
} from '@sanity/ui'
import { SanityDocument, set } from 'sanity'
import { useClient } from 'sanity'
import { nanoid } from 'nanoid'
import styles from '../style/TagInput.module.scss'

export default function TagInput(props: {value: any, onChange: Function}) {
  const { value = [], onChange } = props
  const [input, setInput] = useState('')
  const [allTags, setAllTags] : [SanityDocument | any, Function] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [editing, setEditing] = useState(false)
  const client = useClient()

  const fetchTags = () => {
    client.fetch(`*[_type == "tag"]{_id, title}`).then(setAllTags as any)
  }

  useEffect(() => {
    fetchTags()
  }, [])

  const filteredTags = useMemo(() => {
    const search = input.trim().toLowerCase()
    return search
      ? allTags.filter(
          (tag: {title: string, _id: string}) =>
            tag.title.toLowerCase().includes(search) &&
            !value.some((v: {_ref: string}) => v._ref === tag._id)
        )
      : []
  }, [input, allTags, value])

  const handleAddTag = async (tag?: {_id: string, title: string}) => {
    let tagRef
    if (tag) {
      tagRef = {
        _type: 'reference',
        _ref: tag._id,
        _key: nanoid(),
      }
    } else {
      const trimmed = input.trim()
      if (!trimmed) return

      const existing : {_id: string, _type: string, title: string} = allTags.find(
        (t: {title: string}) => t.title.toLowerCase() === trimmed.toLowerCase()
      )!

      if (existing) {
        tagRef = {
          _type: 'reference',
          _ref: existing._id,
          _key: nanoid(),
        }
      } else {
        const newTag = await client.create({
          _type: 'tag',
          title: trimmed,
        })
        tagRef = {
          _type: 'reference',
          _ref: newTag._id,
          _key: nanoid(),
        }
        setAllTags([...allTags, newTag])
      }
    }

    const alreadyExists = value.some((v: {_ref: string}) => v._ref === tagRef._ref)
    if (!alreadyExists) {
      onChange(set([...(value || []), tagRef]))
    }

    setInput('')
    setShowDropdown(false)
  }

  const handleRemoveTag = (refId: string) => {
    const filtered = value.filter((tag: {_ref: string}) => tag._ref !== refId)
    onChange(set(filtered))
  }

  const getTagTitle = (refId: string) => {
    const tag = allTags.find((t: {_id: string}) => t._id === refId)
    return tag ? tag.title : refId
  }

  // 🚨 Auto-unlink from all documents before deleting
  const handleDeleteTag = async (tagId: string) => {
    // Find all documents referencing this tag
    const referringDocs = await client.fetch(
      `*[_type != "tag" && references($tagId)]{_id}`,
      { tagId }
    )

    for (const doc of referringDocs) {
      await client
        .patch(doc._id)
        .unset([`tags[_ref=="${tagId}"]`])
        .commit()
    }

    // Delete tag itself
    await client.delete(tagId)
    await fetchTags()
  }

  return (
    <Stack className={styles.tag} space={3}>
      <Flex justify="space-between">
        <Box style={{ position: 'relative', flex: 1 }}>
          <TextInput
            placeholder="Type to add a tag..."
            value={input}
            onChange={(e) => {
              setInput(e.currentTarget.value)
              setShowDropdown(true)
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                handleAddTag()
              } else if (e.key === 'Escape') {
                setShowDropdown(false)
              }
            }}
          />
          {showDropdown && filteredTags.length > 0 && (
            <Card
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                zIndex: 10,
                width: '100%',
                maxHeight: '200px',
                overflowY: 'auto',
                background: 'white',
                border: '1px solid #ccc',
                borderTop: 'none',
              }}
            >
              {filteredTags.map((tag: {_id: string, title: string}) => (
                <Box
                  key={tag._id}
                  padding={2}
                  style={{ cursor: 'pointer' }}
                  className="option"
                  onClick={() => handleAddTag(tag)}
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <Text>{tag.title}</Text>
                </Box>
              ))}
            </Card>
          )}
        </Box>

        <Button
          style={{ marginLeft: '1rem' }}
          onClick={() => setEditing(true)}
          tone="default"
          text="Edit Tags"
        />
      </Flex>

      <Flex wrap="wrap" gap={2}>
        {(value || []).map((tagRef: {_ref: string, _key: string}) => (
          <Card className='pill' key={tagRef._key} tone="primary" padding={2} radius={2} shadow={1}>
            <Flex align="center" gap={2}>
              <Text>{getTagTitle(tagRef._ref)}</Text>
              <Button
                tone="critical"
                padding={1}
                onClick={() => handleRemoveTag(tagRef._ref)}
              >
                ×
              </Button>
            </Flex>
          </Card>
        ))}
      </Flex>

      {/* Edit Tags Dialog */}
      {editing && (
        <Dialog
          id="edit-tags-dialog"
          header="Manage Tags"
          width={1}
          onClose={() => setEditing(false)}
        >
          <Stack padding={4} space={3}>
            {allTags.map((tag: {_id: string, title: string}) => (
              <Flex key={tag._id} justify="space-between" align="center">
                <Text>{tag.title}</Text>
                <Button
                  tone="critical"
                  text="Delete"
                  onClick={() => handleDeleteTag(tag._id)}
                />
              </Flex>
            ))}
          </Stack>
        </Dialog>
      )}
    </Stack>
  )
}

// To do:
// Don't allow deleting tags if another document references