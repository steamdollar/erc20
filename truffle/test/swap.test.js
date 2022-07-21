const ingToken = artifacts.require('ingToken')
const EthSwap = artifacts.require('EthSwap')

function toEther(n) {
    return web3.utils.toWei(n,'ether')
}

contract('eth swap', ([deployer, account1, account2]) => {
    let token, ethSwap

    describe('ethswap deployment', async () => {
        // console.log(deployer, account1, account2);
       it('deployed', async() => {
        token = await ingToken.deployed()
        ethSwap = await EthSwap.deployed()
        // await token.transfer(ethSwap.address, toEther('1000'))
        // console.log(token.address, ethSwap.address);
       })

       it('token 배포자의 초기값', async () => {
        const balance = await token.balanceOf(deployer);
        // console.log(balance.toString())
        assert.equal(balance.toString(), '100000000000000000000000')
       })

       it('ethSwap-Migration', async () => {
        const address = await ethSwap.getToken();
        console.log(address)
        assert.equal(address, token.address)
       })

       it('ethswap-getMsgSender, getThisAddress', async() => {
        const msgsender = await ethSwap.getMsgSender();
        const thisaddress = await ethSwap.getThis()

        console.log(msgsender, thisaddress)
        assert.equal(msgsender, deployer)
        assert.equal(thisaddress, ethSwap.address)
       })
       // erc20 배포자의 eoa 계정을 알수 있다.
       // 근데 ㅈ그럼 아까 그 node_moduels/../../... erc20.sol을 수정해야함
       // 거기 owner 변수 수정하고 생성자 함수에 owner = msg.sender 넣어주면 된다

       it('token - owner 확인', async() => {
        const owner = await token._owner()
        assert.equal(owner, deployer)
       })

       it('ethswap - getTokenOwner()', async() => {
        const owner = await ethSwap.getTokenOwner();
        assert.equal(owner, deployer);
       })

       it('token - balanceOf()', async () => {
        await token.transfer(ethSwap.address, toEther('1000'))
        const balance = await token.balanceOf(ethSwap.address)
        // console.log(balance.toString())
       })

       it('ethSwap - buyToken()', async () => {
        let balance = await token.balanceOf(account1);
        assert.equal(balance.toString(),'0')
        // console.log(balance.toString())

        await ethSwap.buyToken({
            from : account1,
            value : toEther('1')
        })

        balance = await token.balanceOf(account1);
        console.log(web3.utils.fromWei(balance.toString(),'ether'))

        const eth = await web3.eth.getBalance(account1)
        console.log(eth);

        const ethSwapBalance = await web3.eth.getBalance(ethSwap.address)
        console.log(web3.utils.fromWei(ethSwapBalance))
       })

       it('sell' , async () => {
        const account1_balance = await token.balnaceOf(account1);
        console.log(web3.utils.fromWei(account1_balance.toString(), 'ether'))

        //approve (위임 받는 사람, 보낼 양)
        // token wnsms goddnl
        // ethswap에 

       })
    })
})