import React from 'react'
import Banner from './Banner';
import Currency from './Currency';
import NewsList from './NewsList'
import Searh from './Searh';
import ShortLists from './ShortLists';
import AsideWidget from './AsideWidget';

import data from './paternData';
import loadData from './InitData'

loadData(data);
const { news, searh, asideWidget, banners, currency, shortList } = data

function Page() {
  return (
    <>
      <NewsList newsList={news}/>
      <AsideWidget />
      <Currency />      
      <Searh />
      <Banner banner={banners}/>
      <ShortLists />
    </>
  )
}

export default Page
