/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GovernanceToken,
  GovernanceTokenInterface,
} from "../../contracts/GovernanceToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "pos",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "fromBlock",
            type: "uint32",
          },
          {
            internalType: "uint224",
            name: "votes",
            type: "uint224",
          },
        ],
        internalType: "struct ERC20Votes.Checkpoint",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "delegates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastTotalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "s_maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x61014060405269d3c21bcecceda1000000600a553480156200002057600080fd5b506040518060400160405280600f81526020016e23b7bb32b93730b731b2aa37b5b2b760891b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600f81526020016e23b7bb32b93730b731b2aa37b5b2b760891b8152506040518060400160405280600281526020016111d560f21b8152508160039080519060200190620000bf9291906200077c565b508051620000d59060049060208401906200077c565b5050825160209384012082519284019290922060e08390526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818901819052818301979097526060810194909452608080850193909352308483018190528151808603909301835260c094850190915281519190960120905292909252610120525050600a54620001789033906200017e565b620008b6565b6200019582826200019960201b620009bd1760201c565b5050565b620001b082826200025060201b62000a4d1760201c565b6001600160e01b03620001c46200033f8216565b1115620002315760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b60648201526084015b60405180910390fd5b6200024a600962000b386200034560201b17836200035a565b50505050565b6001600160a01b038216620002a85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640162000228565b8060026000828254620002bc91906200082e565b90915550506001600160a01b03821660009081526020819052604081208054839290620002eb9084906200082e565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3620001956000838362000511565b60025490565b60006200035382846200082e565b9392505050565b825460009081908015620003ac57856200037660018362000849565b8154811062000389576200038962000863565b60009182526020909120015464010000000090046001600160e01b0316620003af565b60005b6001600160e01b03169250620003c683858760201c565b91506000811180156200040a57504386620003e360018462000849565b81548110620003f657620003f662000863565b60009182526020909120015463ffffffff16145b156200047e5762000426826200052960201b62000b441760201c565b866200043460018462000849565b8154811062000447576200044762000863565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b0316021790555062000503565b856040518060400160405280620004a0436200059860201b62000bb11760201c565b63ffffffff168152602001620004c1856200052960201b62000b441760201c565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b505050565b6200050c838383620005ff60201b62000c161760201c565b60006001600160e01b03821115620005945760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b606482015260840162000228565b5090565b600063ffffffff821115620005945760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b606482015260840162000228565b620006178383836200050c60201b62000c311760201c565b6001600160a01b038381166000908152600760205260408082205485841683529120546200050c92918216911683818314801590620006565750600081115b156200050c576001600160a01b03831615620006e3576001600160a01b038316600090815260086020908152604082208291620006a091906200076e901b62000c3617856200035a565b91509150846001600160a01b0316600080516020620024c48339815191528383604051620006d8929190918252602082015260400190565b60405180910390a250505b6001600160a01b038216156200050c576001600160a01b03821660009081526008602090815260408220829162000727919062000345901b62000b3817856200035a565b91509150836001600160a01b0316600080516020620024c483398151915283836040516200075f929190918252602082015260400190565b60405180910390a25050505050565b600062000353828462000849565b8280546200078a9062000879565b90600052602060002090601f016020900481019282620007ae5760008555620007f9565b82601f10620007c957805160ff1916838001178555620007f9565b82800160010185558215620007f9579182015b82811115620007f9578251825591602001919060010190620007dc565b50620005949291505b8082111562000594576000815560010162000802565b634e487b7160e01b600052601160045260246000fd5b6000821982111562000844576200084462000818565b500190565b6000828210156200085e576200085e62000818565b500390565b634e487b7160e01b600052603260045260246000fd5b600181811c908216806200088e57607f821691505b60208210811415620008b057634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e0516101005161012051611bbe620009066000396000611038015260006110870152600061106201526000610fbb01526000610fe50152600061100f0152611bbe6000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c80636fcfff45116100c3578063a457c2d71161007c578063a457c2d7146102d0578063a9059cbb146102e3578063c3cda520146102f6578063d505accf14610309578063dd62ed3e1461031c578063f1127ed81461032f57600080fd5b80636fcfff451461023e57806370a08231146102665780637ecebe001461028f5780638e539e8c146102a257806395d89b41146102b55780639ab24eb0146102bd57600080fd5b80633644e515116101155780633644e515146101c757806339509351146101cf5780633a46b1a8146101e2578063587cde1e146101f55780635c19a95c146102205780635d6418471461023557600080fd5b806306fdde0314610152578063095ea7b31461017057806318160ddd1461019357806323b872dd146101a5578063313ce567146101b8575b600080fd5b61015a61036c565b6040516101679190611838565b60405180910390f35b61018361017e3660046118a9565b6103fe565b6040519015158152602001610167565b6002545b604051908152602001610167565b6101836101b33660046118d3565b610416565b60405160128152602001610167565b61019761043a565b6101836101dd3660046118a9565b610449565b6101976101f03660046118a9565b61046b565b61020861020336600461190f565b6104be565b6040516001600160a01b039091168152602001610167565b61023361022e36600461190f565b6104dc565b005b610197600a5481565b61025161024c36600461190f565b6104e9565b60405163ffffffff9091168152602001610167565b61019761027436600461190f565b6001600160a01b031660009081526020819052604090205490565b61019761029d36600461190f565b610511565b6101976102b036600461192a565b61052f565b61015a61055b565b6101976102cb36600461190f565b61056a565b6101836102de3660046118a9565b6105f0565b6101836102f13660046118a9565b61066b565b610233610304366004611954565b610679565b6102336103173660046119ac565b6107ab565b61019761032a366004611a16565b61090f565b61034261033d366004611a49565b61093a565b60408051825163ffffffff1681526020928301516001600160e01b03169281019290925201610167565b60606003805461037b90611a89565b80601f01602080910402602001604051908101604052809291908181526020018280546103a790611a89565b80156103f45780601f106103c9576101008083540402835291602001916103f4565b820191906000526020600020905b8154815290600101906020018083116103d757829003601f168201915b5050505050905090565b60003361040c818585610c42565b5060019392505050565b600033610424858285610d66565b61042f858585610dda565b506001949350505050565b6000610444610fae565b905090565b60003361040c81858561045c838361090f565b6104669190611ad4565b610c42565b60004382106104955760405162461bcd60e51b815260040161048c90611aec565b60405180910390fd5b6001600160a01b03831660009081526008602052604090206104b790836110d5565b9392505050565b6001600160a01b039081166000908152600760205260409020541690565b6104e63382611191565b50565b6001600160a01b03811660009081526008602052604081205461050b90610bb1565b92915050565b6001600160a01b03811660009081526005602052604081205461050b565b60004382106105505760405162461bcd60e51b815260040161048c90611aec565b61050b6009836110d5565b60606004805461037b90611a89565b6001600160a01b03811660009081526008602052604081205480156105dd576001600160a01b03831660009081526008602052604090206105ac600183611b23565b815481106105bc576105bc611b3a565b600091825260209091200154600160201b90046001600160e01b03166105e0565b60005b6001600160e01b03169392505050565b600033816105fe828661090f565b90508381101561065e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161048c565b61042f8286868403610c42565b60003361040c818585610dda565b834211156106c95760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e61747572652065787069726564000000604482015260640161048c565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b0388169181019190915260608101869052608081018590526000906107439061073b9060a00160405160208183030381529060405280519060200120611227565b858585611275565b905061074e8161129d565b86146107985760405162461bcd60e51b81526020600482015260196024820152784552433230566f7465733a20696e76616c6964206e6f6e636560381b604482015260640161048c565b6107a28188611191565b50505050505050565b834211156107fb5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015260640161048c565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c988888861082a8c61129d565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061088582611227565b9050600061089582878787611275565b9050896001600160a01b0316816001600160a01b0316146108f85760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015260640161048c565b6109038a8a8a610c42565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60408051808201909152600080825260208201526001600160a01b0383166000908152600860205260409020805463ffffffff841690811061097e5761097e611b3a565b60009182526020918290206040805180820190915291015463ffffffff81168252600160201b90046001600160e01b0316918101919091529392505050565b6109c78282610a4d565b6002546001600160e01b031015610a395760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b606482015260840161048c565b610a476009610b38836112c5565b50505050565b6001600160a01b038216610aa35760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161048c565b8060026000828254610ab59190611ad4565b90915550506001600160a01b03821660009081526020819052604081208054839290610ae2908490611ad4565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3610b346000838361143c565b5050565b60006104b78284611ad4565b60006001600160e01b03821115610bad5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b606482015260840161048c565b5090565b600063ffffffff821115610bad5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b606482015260840161048c565b610c31610c22846104be565b610c2b846104be565b83611447565b505050565b60006104b78284611b23565b6001600160a01b038316610ca45760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161048c565b6001600160a01b038216610d055760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161048c565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610d72848461090f565b90506000198114610a475781811015610dcd5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161048c565b610a478484848403610c42565b6001600160a01b038316610e3e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161048c565b6001600160a01b038216610ea05760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161048c565b6001600160a01b03831660009081526020819052604090205481811015610f185760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161048c565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610f4f908490611ad4565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610f9b91815260200190565b60405180910390a3610a4784848461143c565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561100757507f000000000000000000000000000000000000000000000000000000000000000046145b1561103157507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b8154600090815b818110156111395760006110f08284611584565b90508486828154811061110557611105611b3a565b60009182526020909120015463ffffffff16111561112557809250611133565b611130816001611ad4565b91505b506110dc565b811561117c578461114b600184611b23565b8154811061115b5761115b611b3a565b600091825260209091200154600160201b90046001600160e01b031661117f565b60005b6001600160e01b031695945050505050565b600061119c836104be565b905060006111bf846001600160a01b031660009081526020819052604090205490565b6001600160a01b0385811660008181526007602052604080822080546001600160a01b031916898616908117909155905194955093928616927f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610a47828483611447565b600061050b611234610fae565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006112868787878761159f565b9150915061129381611682565b5095945050505050565b6001600160a01b03811660009081526005602052604090208054600181018255905b50919050565b82546000908190801561130f57856112de600183611b23565b815481106112ee576112ee611b3a565b600091825260209091200154600160201b90046001600160e01b0316611312565b60005b6001600160e01b0316925061132b83858763ffffffff16565b915060008111801561136957504386611345600184611b23565b8154811061135557611355611b3a565b60009182526020909120015463ffffffff16145b156113c95761137782610b44565b86611383600184611b23565b8154811061139357611393611b3a565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b03160217905550611433565b8560405180604001604052806113de43610bb1565b63ffffffff1681526020016113f285610b44565b6001600160e01b039081169091528254600181018455600093845260209384902083519490930151909116600160201b0263ffffffff909316929092179101555b50935093915050565b610c31838383610c16565b816001600160a01b0316836001600160a01b0316141580156114695750600081115b15610c31576001600160a01b038316156114f7576001600160a01b038316600090815260086020526040812081906114a490610c36856112c5565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516114ec929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615610c31576001600160a01b0382166000908152600860205260408120819061152d90610b38856112c5565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611575929190918252602082015260400190565b60405180910390a25050505050565b60006115936002848418611b50565b6104b790848416611ad4565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b038311156115cc5750600090506003611679565b8460ff16601b141580156115e457508460ff16601c14155b156115f55750600090506004611679565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611649573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661167257600060019250925050611679565b9150600090505b94509492505050565b600081600481111561169657611696611b72565b141561169f5750565b60018160048111156116b3576116b3611b72565b14156116fc5760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b604482015260640161048c565b600281600481111561171057611710611b72565b141561175e5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161048c565b600381600481111561177257611772611b72565b14156117cb5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161048c565b60048160048111156117df576117df611b72565b14156104e65760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161048c565b600060208083528351808285015260005b8181101561186557858101830151858201604001528201611849565b81811115611877576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146118a457600080fd5b919050565b600080604083850312156118bc57600080fd5b6118c58361188d565b946020939093013593505050565b6000806000606084860312156118e857600080fd5b6118f18461188d565b92506118ff6020850161188d565b9150604084013590509250925092565b60006020828403121561192157600080fd5b6104b78261188d565b60006020828403121561193c57600080fd5b5035919050565b803560ff811681146118a457600080fd5b60008060008060008060c0878903121561196d57600080fd5b6119768761188d565b9550602087013594506040870135935061199260608801611943565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a0312156119c757600080fd5b6119d08861188d565b96506119de6020890161188d565b955060408801359450606088013593506119fa60808901611943565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611a2957600080fd5b611a328361188d565b9150611a406020840161188d565b90509250929050565b60008060408385031215611a5c57600080fd5b611a658361188d565b9150602083013563ffffffff81168114611a7e57600080fd5b809150509250929050565b600181811c90821680611a9d57607f821691505b602082108114156112bf57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611ae757611ae7611abe565b500190565b6020808252601f908201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400604082015260600190565b600082821015611b3557611b35611abe565b500390565b634e487b7160e01b600052603260045260246000fd5b600082611b6d57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fdfea26469706673582212201f033f4a58c906a702e0ffc6845fcee9554574de12b58eb6f65ea499afed0ec964736f6c63430008090033dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724";

type GovernanceTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GovernanceTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GovernanceToken__factory extends ContractFactory {
  constructor(...args: GovernanceTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GovernanceToken> {
    return super.deploy(overrides || {}) as Promise<GovernanceToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GovernanceToken {
    return super.attach(address) as GovernanceToken;
  }
  override connect(signer: Signer): GovernanceToken__factory {
    return super.connect(signer) as GovernanceToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernanceTokenInterface {
    return new utils.Interface(_abi) as GovernanceTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernanceToken {
    return new Contract(address, _abi, signerOrProvider) as GovernanceToken;
  }
}
