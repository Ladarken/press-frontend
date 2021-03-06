import React from 'react'
import styled from 'styled-components'
import etherscan from '../../../assets/img/etherscan.png'
import github from '../../../assets/img/github.png'
import uniswap from '../../../assets/img/uniswap.png'
import discord from '../../../assets/img/discord.png'
import twitter from '../../../assets/img/twitter.png'
import benchmark from '../../../assets/img/icon.png'
import coingecko from '../../../assets/img/coingecko.png'
import telegram from '../../../assets/img/telegram.png'
import page from '../../../assets/img/page.png'
const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0x5D9972dD3Ba5602574ABeA6bF9E1713568D49903#code"
      >
        <img src={etherscan} style={{maxHeight:24, marginRight:4}}/>
        <span style={{verticalAlign:'top'}}>The Press</span>
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0x36b679bd64ed73dbfd88909cdcb892cb66bd4cbb#contracts"
      >
        <img src={etherscan} style={{maxHeight:24, marginRight:4}}/>
        <span style={{verticalAlign:'top'}}>xMARK</span>
      </StyledLink>
      
      <StyledLink target="_blank" href="https://github.com/benchmarkprotocol">
      <img src={github} style={{maxHeight:24, marginRight:4}}/>
        <span style={{verticalAlign:'top'}}>Github</span>
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://info.uniswap.org/pair/0x6f23d2fedb4ff4f1e9f8c521f66e5f2a1451b6f3"
      >
      <img src={uniswap} style={{maxHeight:24, marginRight:4}}/>
        <span style={{verticalAlign:'top'}}>MARK-ETH</span>
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://info.uniswap.org/pair/0x7f0ad87b99ba16e6e651120c2e230cf6928c3d15"
      >
      <img src={uniswap} style={{maxHeight:24, marginRight:4}}/>
        <span style={{verticalAlign:'top'}}>MARK-USDC</span>
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://info.uniswap.org/pair/0x36cd8c1a21b0b7d86a26ce1221f5a48b80fe27c4"
      >
      <img src={uniswap} style={{maxHeight:24, marginRight:4}}/>
        <span style={{verticalAlign:'top'}}>WBTC-MARK</span>
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://www.coingecko.com/en/coins/benchmark-protocol"
      >
      <img src={coingecko} style={{maxHeight:24, marginRight:4}}/>
        <span style={{verticalAlign:'top'}}>CoinGecko</span>
      </StyledLink>
      <StyledLink target="_blank" href="https://discord.gg/HcxAEaHG3X">
      <img src={discord} style={{maxHeight:24, marginRight:4}}/>
        <span style={{verticalAlign:'top'}}>Discord</span>
      </StyledLink>
      <StyledLink target="_blank" href="https://t.me/joinchat/Tt7sw00qqNnEWLIOzmYQ_w">
      <img src={telegram} style={{maxHeight:24, marginRight:4}}/>
        <span style={{verticalAlign:'top'}}>Telegram</span>
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/Benchmark_DeFi">
      <img src={twitter} style={{maxHeight:24, marginRight:4}}/>
        <span style={{verticalAlign:'top'}}>Twitter</span>
      </StyledLink>
      <StyledLink target="_blank" href="https://benchmarkprotocol.finance">
      <img src={benchmark} style={{maxHeight:24, marginRight:4}}/>
        <span style={{verticalAlign:'top'}}>Main Site</span>
      </StyledLink>

    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[2]}px;
  padding-right: ${(props) => props.theme.spacing[2]}px;
  text-decoration: none;
  text-shadow: 0 0 3px #000, 0 0 6px #000, 0 0 6px #000, 0 0 16px #000;
  &:hover {
    transform: scale(1.15);
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
