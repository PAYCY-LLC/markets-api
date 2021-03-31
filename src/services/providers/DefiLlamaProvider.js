import axios from 'axios'

class DefiLlamaProvider {
  constructor() {
    this.baseUrl = 'https://api.defillama.com'
  }

  async getGlobalDefiMarkets() {
    const { data } = await axios.get(`${this.baseUrl}/charts`)
    const lastItem = data.pop()

    return {
      totalValueLocked: lastItem.totalLiquidityUSD
    }
  }

  getDefiMarkets() {
    return this.doGetRequest(`${this.baseUrl}/protocols`)
  }
}

export default DefiLlamaProvider
