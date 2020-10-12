import React from 'react'
import fetch from 'isomorphic-unfetch';
import cheerio from 'cheerio'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'

import Tag from '../../components/atoms/Tag'
import Toc from '../../components/atoms/Toc'

const BlogId = ({ blog }) => {
    // 目次の作成
    const $ = cheerio.load(blog.body);
    const headings = $('h1, h2, h3').toArray();
    const toc = headings.map(data => ({
        text: data.children[0].data,
        id: data.attribs.id,
        name: data.name
    }));
    console.log(toc)

    return (
        <div className="flex flex-row">
            <section className="w-9/12 bg-white m-10">
                <section className="inner p-10">
                    <img src={blog.eyeCatch.url} className="w-9/12 h-auto mx-auto" />
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
                <article className="fixed">
                    <p className="mb-5"><FontAwesomeIcon icon={faBook} className="mr-1" />目次</p>
                    <ul>
                        {toc.map(item => (
                            <Toc item={item} />
                        ))}
                    </ul>
                </article>
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
