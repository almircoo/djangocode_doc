# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).

[![Top Langs](https://github-readme-stats.vercel.app/api?username=almircoo&theme=algolia&show_icons=true)](https://github.com/almircoo)

[![Mohammad Saifur Rahman's GitHub stats](https://github-readme-stats.vercel.app/api/top-langs?username=almircoo&hide=html,scss,stylus,blade%20notebook,css,shell,batchfile&theme=algolia&show_icons=true)](https://github.com/almircoo)

<!-- https://cs50.harvard.edu/x/2024/weeks/0/ -->