<div align="center">
<h1 align="center">
next-nprogress
</h1>
<h3>NProgress integration with Next 13</h3>
<h5>◦ Developed with the software and tools below.</h5>


<p align="center">
<img src="https://img.shields.io/badge/esbuild-FFCF00.svg?style&logo=esbuild&logoColor=black" alt="esbuild" />
<img src="https://img.shields.io/badge/Next.js-000000.svg?style&logo=Next.js&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" />
</p>
<img src="https://img.shields.io/github/license/lexz451/next-nprogress?style&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/lexz451/next-nprogress?style&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/lexz451/next-nprogress?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/lexz451/next-nprogress?style&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📍 Overview

Integrate nprogress with Next.js 13. Compatible with the new app directory structure. Inspired by [Next NProgress Bar](https://github.com/Skyleen77/next-nprogress-bar)

---

## 🚀 Getting Started

Install the package with npm:

```sh
npm install next-nprogress
```
or yarn:

```sh
yarn add next-nprogress
```
or pnpm:

```sh
pnpm add next-nprogress
```

---

## 📖 Usage

Add the ProgressBar component to your app layout. It will automatically render the progress bar when a page is loading.

```tsx
import { ProgressBar } from 'next-nprogress';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <ProgressBar
          color='#333'
          height='2px'
          options={{}}
          delay={0}
        />
      </body>
    </html>
  )
}
```

Use the Link component provided by next-nprogress.

```tsx
import { Link } from 'next-nprogress';

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  )
}
```

Use the router hook provided by next-nprogress.

```tsx
import { useRouter } from 'next-nprogress';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <button onClick={() => router.push('/')}>Home</button>
      <button onClick={() => router.push('/about')}>About</button>
    </nav>
  )
}
```

Available props for the ProgressBar component:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| color | string | #29D | The color of the progress bar. |
| height | string | 2px | The height of the progress bar. |
| options | object | {} | The options passed to nprogress. |
| delay | number | 0 | The delay in milliseconds before the progress bar is shown. |

passing options to the progress bar:

```tsx
<ProgressBar
  color='#333'
  height='2px'
  options={{
    trickleSpeed: 50,
    showSpinner: false,
  }}
  delay={0}
/>
```

---
## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️ MIT` License.

---
