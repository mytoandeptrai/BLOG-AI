## Features

- 🚀 AI-Gemini Conversion: Convert audio or video into a blog post within seconds using Gemini.
- 🔐 Authentication: Secure user authentication via Clerk
- 📝 Blog Post Generation: Automatically generate blog posts based on audio or video transcriptions.
- 🎙️ Audio and video file processing (up to 10MB)
- 💾 Database Management: Efficient data management with NeonDb.
- 📤 File Uploads: Seamless file uploads with UploadThing ( Still processing ).
- 🖋️ Markdown Editor: Edit your blog posts with a built-in Markdown editor.
- 💅 TailwindCSS for styling
- 🔒 Secure file handling and processing
- 🔍 SEO-friendly blog post generation

## Built with

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Magic UI](https://magicui.design)
- [Clerk](https://clerk.com/)
- [Neon](https://neon.tech/)
- [Upload things](https://uploadthing.com/)
- [Gemini AI](https://gemini.com/)
- [Docker](https://docker.com/)

### Tools
- [Biome](https://biomejs.dev/)

## Feature Requests

To request a feature open a [GitHub issue](https://github.com/mytoandeptrai/BLOG-AI/issues).

 ## Contribution Guidelines

Thank you for considering contributing to our AI-powered blog generator project! Please follow these guidelines to ensure smooth collaboration:

1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine:
3. Create a new branch for your changes:

    ```bash
    git checkout -b feature/your-feature-name
    ```

4. Make your changes and ensure they adhere to the project's coding style and guidelines.
5. Test your changes thoroughly to avoid introducing bugs.
6. Commit your changes with clear and descriptive commit messages:

    ```bash
    git commit -m 'feat: Add your commit message'
    ```
    ``Note:`` Before committing changes, ensure you include one of these tags in your commit message: ```feat, fix, wip, patch, build```.

7. Push your changes to your forked repository:

    ```bash
    git push origin feature/your-feature-name
    ```

8. Open a pull request against the `main` branch of the original repository.
9. Provide a clear and concise description of your changes in the pull request, along with any relevant information.
10. Ensure your pull request passes all checks and tests before requesting a review.

### Setting Up Your Environment Variables

To run the project locally, you need to set up the following environment variables:

```python
# CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard

# NEONDB
DATABASE_URL=

# UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=
UPLOADTHING_TOKEN=

# GEMINI
GOOGLE_API_KEY=

NODE_ENV=
APP_URL=

```
You can set these environment variables by creating a `.env.local or .env` file in the root directory of the project and adding the variables with their respective values:

---

Built with ❤️ by [Michael](https://github.com/mytoandeptrai)
