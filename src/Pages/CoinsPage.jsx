import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import {FaTwitter, FaFacebook, FaReddit, FaGithub} from 'react-icons/fa'
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';
const CoinsPage = () => {
  const [coin, setCoin]=useState({})
  const params = useParams()

  const url=`https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`

  useEffect(() => {
    axios.get(url).then((response)=>{
        setCoin(response.data)
    })
}, [url])
  

  return (
    <div className='rounded-div my-12 py-8'>
      <div className='flex py-8'>
        <img className='w-20 mr-8' src={coin.image?.large} alt="" />
        <div>
          <p className='text-3xl font-bold' >{coin?.name} Price</p>
          <p>({coin.symbol?.toUpperCase()} / USD)</p>
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <div className='flex justify-between'>
            {coin.market_data?.current_price ? (<p className='text-3xl font-bold'>${coin.market_data.current_price.usd.toLocaleString()}</p>):
            null}
            <p>7 Days</p>
          </div>
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color='teal'/>
            </Sparklines>
          </div>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'>Market Cap</p>
              {coin.market_data?.market_cap?(<p>${coin.market_data?.market_cap.usd.toLocaleString(7)}</p>)
              :null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Volume (24h)</p>
              {coin.market_data?.market_cap?(<p>${coin.market_data?.total_volume.usd.toLocaleString(7)}</p>)
              :null}
            </div>
          </div>
          <div className='flex justify-between py-4'>
            <div>
              <p className='text-gray-500 text-sm'> 24h High</p>
              {coin.market_data?.high_24h?(<p>${coin.market_data?.high_24h.usd.toLocaleString(7)}</p>)
              :null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'> 24h Low</p>
              {coin.market_data?.low_24h?(<p>${coin.market_data?.low_24h.usd.toLocaleString(7)}</p>)
              :null}
            </div>
          </div>
         </div>
         <div>
          <p className='text-xl font-bold'>Market Stats</p>
          <div className='flex justify-between py-4 '>
            <div>
              <p className='text-gray-500 text-sm'>Market Rank</p>
              {coin.market_cap_rank}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Hashing Algorithm</p>
              {coin.hashing_algorithm? <p>{coin.hashing_algorithm}</p>:null}
            </div>
            <div>
              <p className='text-gray-500 text-sm'>Trust Score</p>
              {coin.tickers? <p>{coin.liquidity_score.toFixed(2)}</p>:null}
            </div>
          </div>
          <div className='flex justify-between py-4'>
            <div>
              <p>Price change (24h)</p>
              {coin.market_data? (<p className='text-gray-500 text-sm'>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>):null}
            </div>
            <div>
              <p>Price change (7 Days)</p>
              {coin.market_data? (<p className='text-gray-500 text-sm'>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>):null}
            </div>
            <div>
              <p>Price change (14 Days)</p>
              {coin.market_data? (<p className='text-gray-500 text-sm'>{coin.market_data.price_change_percentage_14d.toFixed(2)}%</p>):null}
            </div>
          </div>
          <div className='flex justify-between py-4'>
            <div>
              <p>Price Change (30 Days)</p>
              {coin.market_data? (<p className='text-gray-500 text-sm'>{coin.market_data.price_change_percentage_30d.toFixed(2)}%</p>):null}
            </div>
            <div>
              <p>Price Change (60 Days)</p>
              {coin.market_data? (<p className='text-gray-500 text-sm'>{coin.market_data.price_change_percentage_60d.toFixed(2)}%</p>):null}
            </div>
            <div>
              <p>Price Change (1 Year)</p>
              {coin.market_data? (<p className='text-gray-500 text-sm'>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>):null}
            </div>
          </div>
          <div className='flex justify-around p-8 text-accent'>
            <FaTwitter/>
            <FaFacebook/>
            <FaReddit/>
            <FaGithub/>
          </div>
         </div>
      </div>

      <div className='py-4'>
        <p className='text-xl font-bold' >About {coin.name}</p>
        <p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description? coin.description.en:""),}} ></p>
      </div>



    </div>
  )
}

export default CoinsPage