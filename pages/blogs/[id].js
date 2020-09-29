import React from 'react'
import fetch from 'isomorphic-unfetch';

const BlogId = ({ blog }) => {
    return (
        <div>
            <h1>{blog.title}</h1>
            <div>
                {blog.tags.map(tag => (
                    <React.Fragment key={tag.id}>
                        <span>{tag.name}</span>
                    </React.Fragment>
                ))}
            </div>
            <div dangerouslySetInnerHTML={{ __html: `${blog.body}` }}></div>
        </div>
    );
};

// パスを生み出している
export const getStaticPaths = async () => {
    const key = {
        headers: { 'X-API-KEY': process.env.API_KEY },
    };

    const res = await fetch('https://prodeza.microcms.io/api/v1/blogs/', key);
    const repos = await res.json();
    console.log(repos)

    // 配列で/blogs/idを返す
    console.log(repos.contents)
    const paths = repos.contents.map(repo => `/blogs/${repo.id}`);
    return { paths, fallback: false };
};
//fallbackは事前ビルドしたパス以外にアクセスしたときの動作を決めるものです。

// false の場合
// 404 pageとなります。

// true の場合
// 先程の例ではGitHubのAPIを使って30のページを事前にビルドしました。しかしZEITが管理するレポジトリは30以上存在します。別のレポジトリの名前でアクセスした場合には事前にビルドされていなくてもページを正しく表示させたいです。

// 内容を返す
export const getStaticProps = async context => {
    const id = context.params.id;

    const key = {
        headers: { 'X-API-KEY': process.env.API_KEY },
    };

    const res = await fetch(
        `https://prodeza.microcms.io/api/v1/blogs/${id}`,
        key,
    );
    const blog = await res.json();

    return {
        props: {
            blog: blog
        }
    };
};

export default BlogId;
