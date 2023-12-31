export default {
  name: 'reels',
  title: 'Reels',
  type: 'document',
  fields: [
    {
      name: 'topic',
      tile: 'Topic',
      type: 'string',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'file',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'userId',
      title: 'UserId',
      type: 'string',
    },
    {
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy',
    },
    {
      name: 'like',
      title: 'Like',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'user',
            },
          ],
        },
      ],
    },
    {
      name: 'coments',
      title: 'Coments',
      type: 'array',
      of: [{ type: 'coment' }],
    },
    {
      name: 'share',
      title: 'Share',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'user',
            },
          ],
        },
      ],
    },
  ],
}
