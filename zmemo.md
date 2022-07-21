# swap

ETH > ERC 20

erc20 > ETH

ERC20 > ERC20


솔리디티 보단 사용 메소드 중 좀 어려운게 있다

allowance approve transferFrom

우선 토큰 만들때 쉽게 만드는 방법을 알아보자.

오픈제펠린이라느걸 활용할 수 있는데

이건 이더리움 제단의 오픈 소스 프로그램임


truffle init

npm init -y

npm i openzeppelin-solidity

node_modules 폴더 안에 openzeppelin-solidity/contracts/token/erc20

보면 erc20 ierc20 sol파일이 있을거다.

truffle의 컨트랙트 디렉토리에서 토큰 sol 파일을 만든다.

//

컨트랙트간 상호작용을 할 수 있도록 해보자.

어렵다..

allowance, approve, transferFrom

msg.sender, this등을 활용해야 함..

//

EOA - EthSwap (contract) > getToken() > ingToken CA

EOA > EthSwap > balanceOf()

