This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[Demo](https://portfolio-shoto.vercel.app/)

## Installation 
```bash
poetry install --no-root
poetry run python ./script/pythonFile.py
```

## Clean up files / functions 
This command will instruct `ts-prune` to exclude the specified files and directories from its analysis.
```sh
npx ts-prune --ignore "(tailwind.config.ts|src/pages/.*|src/service/.*|src/repositories/.*)"
```

### Explanation
- **`tailwind.config.ts`**: Ignores the Tailwind CSS configuration file.
- **`src/pages/.*`**: Ignores any file within the `src/pages` directory and its subdirectories.
- **`src/service/.*`**: Ignores any file within the `src/service` directory and its subdirectories.
- **`src/repositories/.*`**: Ignores any file within the `src/repositories` directory and its subdirectories.
