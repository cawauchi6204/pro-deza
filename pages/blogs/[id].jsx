import React from 'react'
import fetch from 'isomorphic-unfetch';
import marked from 'marked'

import Tag from '../../components/atoms/Tag'

const BlogId = ({ blog }) => {
    return (
        <div className="flex flex-row">
            <section className="w-9/12 bg-white m-10">
                <section className="inner p-10">
                    <img src={blog.eyeCatch.url} />
                    <h1>{blog.title}</h1>
                    <div>
                        {blog.tags.map(tag => (
                            <React.Fragment key={tag.id}>
                                <Tag tag={tag} />
                            </React.Fragment>
                        ))}
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: blog.body }} />
                </section>
            </section>
            <section className="w-3/12e p-2 mt-10">
                <p>ここにリストが入ります</p>
            </section>
        </div >
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

export default BlogId
