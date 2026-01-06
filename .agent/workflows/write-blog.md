---
description: create a new blog post or subpost
---

Follow these steps to create a new blog post or subpost in the `src/content/blog` directory.

### 1. Identify the post type
- **Single post**: A single `.mdx` file in `src/content/blog/`.
- **Parent-child posts (Series)**: A directory in `src/content/blog/` containing an `index.mdx` (parent) and one or more `.mdx` files (subposts).

### 2. Create the file structure
- For a single post: `src/content/blog/<slug>.mdx`
- For a parent post: `src/content/blog/<slug>/index.mdx`
- For a subpost: `src/content/blog/<parent-slug>/<child-slug>.mdx`
- Put assets (images, etc.) in `src/content/blog/<slug>/assets/` if it's a directory-based post.

### 3. Set up Frontmatter
Every blog post MUST have the following frontmatter:

```yml
---
title: 'Your Post Title' # ≤60 characters
description: 'A brief description of your post!' # ≤155 characters
date: YYYY-MM-DD # Current date: 2026-01-06
tags: ['tag1', 'tag2'] # kebab-case preferred
image: './image.png' # Optional, 1200x630px recommended
authors: ['author-id'] # Required, refer to src/content/authors/
draft: false # Set to true to hide from listing
order: 0 # Optional, used to sort subposts
---
```

### 4. Write content
- Use **MDX** for rich content.
- Use semantic HTML and markdown headings (##, ###).
- Use the `<Callout>` component for special notes:
  ```mdx
  import Callout from '@/components/Callout.astro'

  <Callout title="Note title" variant="note" defaultOpen={true}>
    Your message here.
  </Callout>
  ```
  **Variants**:
  - **General**: `note`, `tip`, `warning`, `danger`, `important`.
  - **Academic**: `definition`, `theorem`, `lemma`, `proof`, `corollary`, `proposition`, `axiom`, `conjecture`, `notation`, `remark`, `intuition`, `recall`, `explanation`.
  - **Educational**: `example`, `exercise`, `problem`, `answer`, `solution`, `summary`.

  **Props**:
  - `title`: The title of the callout (string).
  - `variant`: The variant style (string, default: `note`).
  - `defaultOpen`: Whether the callout is expanded by default (boolean, default: `true`).
- For code blocks, you can add titles and highlight lines:
  ```javascript title="src/example.js" {1-3, 5}
  // code here
  ```

### 5. Add Images
- Reference local images using relative paths: `![Alt text](./banner.png)` or `![Alt text](assets/image.png)`.

### 6. Preview and Validate
1. Run `npm run dev` to start the development server.
2. Visit `http://localhost:1234/blog/<slug>` to preview.
3. Check for accessibility, responsive design, and typos.
4. If it's a subpost, verify it appears in the sidebar of the parent post.
