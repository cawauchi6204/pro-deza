import React from 'react'
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Header from '../components/Header'
import Card from '../components/Card'

//これはpropsで参照してprops.blogsでも取れるが、分割代入で{ blogs } とすることで使いやすくなる
const Home = ({ blogs }) => {
  return (
    <div>
      <Header />
      <h2>最新の記事</h2>
      <div>
        {blogs.map(blog => (
          <React.Fragment key={blog.id} >
            <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
              {/*  ここをどうしてas使ってるのかよくわからない */}
              <a>
                <h2>{blog.title}</h2>
              </a>
            </Link>
            <Link href="/blogs/[id]" as={`blogs/${blog.id}`}>
              <img style={{ cursor: 'pointer' }} src={blog.eyeCatch.url} />
            </Link>
            <p>{blog.publishDate}</p>
            {blog.tags.map(tag => (
              <React.Fragment key={tag.id}>
                <span>{tag.name}</span>
              </React.Fragment>
            ))}
            {/* タグを展開している */}
          </React.Fragment>
        ))}
        <Card />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };
  // let promise = fetch(url, [options])
  // url – アクセスする URL
  // options – オプションのパラメータ: メソッドやヘッダなど
  // ブラウザはすぐにリクエストを開始し、promise を返します。
  const res = await fetch(
    `https://prodeza.microcms.io/api/v1/blogs/`,
    key,
  );
  const data = await res.json();

  return {
    props: {
      blogs: data.contents,
    }
  }
};

export default Home;
