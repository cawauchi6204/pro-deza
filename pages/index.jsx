import React from 'react'
import fetch from 'isomorphic-unfetch';

import Header from '../components/templates/Header'
import Footer from '../components/templates/Footer'
import CardList from '../components/molecules/CardList'
import SideBar from '../components/templates/SideBar'
import ScrollUp from '../components//atoms/ScrollUp'

//これはpropsで参照してprops.blogsでも取れるが、分割代入で{ blogs } とすることで使いやすくなる
const Home = ({ blogs }) => {
  return (
    <>
      <Header />
      <main className="flex-row flex justify-between pt-20">
        <section className="w-4/12">
          <h2 className="title top-title text-center text-3xl">プログラミング</h2>
          <p className="text-center text-teal-500 text-2xl py-4"></p>
          <CardList blogs={blogs} />
        </section>
        <section className="w-4/12">
          <h2 className="title top-title text-center text-3xl">デザイン</h2>
          <p className="text-center text-teal-500 text-2xl py-4"></p>
          <CardList blogs={blogs} />
        </section>
        <SideBar className="w-3/12" />
      </main>
      <ScrollUp className="mx-auto fixed" />
      <Footer />
    </>
  );
};

// getStaticePropsは必ずサーバーサイドで行われる
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
