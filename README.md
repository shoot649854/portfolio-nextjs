This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[Demo](https://portfolio-shoto.vercel.app/)

## Installation 
```bash
poetry install --no-root
poetry run python ./script/pythonFile.py
```

### nodeのバージョン固定

本課題では`20.12.2` を使用します。`nodenv` or `asdf` でのバージョン管理を適宜ご利用ください。

### nodenvを使う

```
$ nodenv install 20.12.2
$ nodenv local 20.12.2
$ node -v
v20.12.2
```

### プロジェクトの起動確認

```
$ pnpm i
$ pnpm run dev

http://localhost:3000/ にアクセスしてページが確認できる。
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
