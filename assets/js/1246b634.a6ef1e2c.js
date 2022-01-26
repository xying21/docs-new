"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2537:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>u});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={id:"rules",title:"The General Workflow for Constructing a Transaction"},l=void 0,c={unversionedId:"essays/rules",id:"essays/rules",title:"The General Workflow for Constructing a Transaction",description:"This document will explain how to build a verifiable transaction on CKB in the simplest and most common way possible. It doesn't involve constructing validation scripts, contracts, etc.",source:"@site/docs/essays/workflow.md",sourceDirName:"essays",slug:"/essays/rules",permalink:"/docs/essays/rules",tags:[],version:"current",lastUpdatedBy:"xying21",lastUpdatedAt:1643168896,formattedLastUpdatedAt:"1/26/2022",frontMatter:{id:"rules",title:"The General Workflow for Constructing a Transaction"},sidebar:"Essays",previous:{title:"Tips for profiling CKB script",permalink:"/docs/essays/pprof"},next:{title:"Script dependencies",permalink:"/docs/essays/dependencies"}},d=[{value:"Cell Collect",id:"cell-collect",children:[{value:"USING the ckb indexer service",id:"using-the-ckb-indexer-service",children:[],level:3},{value:"CREATING YOUR OWN CELL COLLECTION SERVICE",id:"creating-your-own-cell-collection-service",children:[],level:3}],level:2},{value:"Constructing a Transaction",id:"constructing-a-transaction",children:[{value:"script",id:"script",children:[],level:3},{value:"witness",id:"witness",children:[],level:3},{value:"Format and Fee",id:"format-and-fee",children:[],level:3},{value:"how to estimate A TRANSACTION fee?",id:"how-to-estimate-a-transaction-fee",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document will explain how to build a verifiable transaction on CKB in the simplest and most common way possible. It doesn't involve constructing validation scripts, contracts, etc."),(0,o.kt)("p",null,"On CKB, any transaction must have at least one input and one output. To construct a transaction, the first thing that is needed is a way to effectively locate an input and this process is referred to as \u201ccell collect\u201d."),(0,o.kt)("h2",{id:"cell-collect"},"Cell Collect"),(0,o.kt)("p",null,"It is important to first understood that CKB\u2019s ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nervos.org/basic-concepts/cell-model.html"},"cell model")," is very similar to the UTXO model, which means that without any pre-caching it is not possible to know the current state of any address. The information that makes up the current state of an address may be scattered across different cells in many corners of the blockchain and a cell collection method is a prerequisite to properly using CKB. The cell model of CKB is described in detail in ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/cell"},"Cell"),"."),(0,o.kt)("p",null,"Let\u2019s take a look at how to collect cells, as there are two ways to do this:"),(0,o.kt)("h3",{id:"using-the-ckb-indexer-service"},"USING the ckb indexer service"),(0,o.kt)("p",null,"This section introduces a simple method which can identify limited information about a specified address (such as live_cell count, transaction count, total capacity). However, this method is based on the CKB node\u2019s indexing function and is only suitable for simple usage (it also consumes resources of the CKB node). "),(0,o.kt)("p",null,"This method also is not capable of cell collection according to more detailed search criteria. For example, locating a contract cell is not possible with this method. "),(0,o.kt)("p",null,"Regardless of these shortcomings, let's start with this method to better understand how cell collection works. By default, this feature is turned off in the CKB node. To turn it on, manually change the configuration file as outlined below and restart the CKB node."),(0,o.kt)("p",null,"Locate the following configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ckb.toml")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[rpc]\n...\n# List of API modules: ["Net", "Pool", "Miner", "Chain", "Stats", "Subscription", "Indexer", "Experiment"]\nmodules = ["Net", "Pool", "Miner", "Chain", "Stats", "Subscription", "Experiment"]\n\n')),(0,o.kt)("p",null,"In the configuration above, the indexing service is not started. To turn this feature on, add \u201cIndexer\u201d to the array."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'modules = ["Net", "Pool", "Miner", "Chain", "Stats", "Subscription", "Experiment", "Indexer"]\n\n')),(0,o.kt)("p",null,"After restarting the CKB node with ",(0,o.kt)("inlineCode",{parentName:"p"},"ckb run -C <path>"),", register the address you want to index through the RPC method ",(0,o.kt)("inlineCode",{parentName:"p"},"[index_lock_hash](https://github.com/nervosnetwork/ckb/blob/master/rpc/README.md#index_lock_hash)"),". "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note that the ",(0,o.kt)("inlineCode",{parentName:"em"},"index_from")," parameter controls the point that indexing starts from: a null value begins indexing from the current chain tip (current latest block), while a value of 0 begins indexing from the genesis block.")),(0,o.kt)("p",null,"Wait for the index service to be rebuilt, then use the RPC interface of the indexing service to view the live_cell/transaction/capacity values of the corresponding address. You may refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/rpc"},"JSON-RPC"),"."),(0,o.kt)("p",null,"To turn the indexing service off, follow this process: unregister the watch list through RPC, shut down the service and remove the \u201cIndexer\u201d value from the array in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ckb.toml")," file."),(0,o.kt)("h3",{id:"creating-your-own-cell-collection-service"},"CREATING YOUR OWN CELL COLLECTION SERVICE"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What are the advantages to creating your own cell collection service?")),(0,o.kt)("p",null,"We all know that a transaction includes the creation and destruction of cells (this is the simplest definition of a CKB transaction). However, due to flexibility of the cell model, any kind of meaningful data can be stored in cell data fields and various types of contracts can be expressed through type scripts. As a result, each user or use case may have different requirements for cell collection."),(0,o.kt)("p",null,"There are many questions to explore, each may have a different answer depending on use case:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What is the order of cell consumption? first-in-first-out, size order, best fit model, etc."),(0,o.kt)("li",{parentName:"ul"},"What kind of cell can be consumed? a specific type or any kind?"),(0,o.kt)("li",{parentName:"ul"},"Does any cell data or cell type require special treatment?"),(0,o.kt)("li",{parentName:"ul"},"Is any filtering/confirmation required after cells are selected?")),(0,o.kt)("p",null,"The indexing service that comes with the CKB node does not address these requirements and cannot be configured to include additional requirements that may be needed in the future. The most effective approach to cell collection is to build the functionality yourself."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How to build cell collection")),(0,o.kt)("p",null,"As a new block is added to the chain, the cells used as inputs to the block must be removed from the live cell set and the outputs created by the block must be added into the live cell set."),(0,o.kt)("p",null,"We know that short forks are always possible in PoW blockchains. When a fork negates the effects of a previously accepted block, the input and output changes from that block must be rolled back. A cache design may help to speed up synchronization, for example, caching the last ",(0,o.kt)("em",{parentName:"p"},"n")," blocks in the chain and removing the live cells consumed in these blocks."),(0,o.kt)("h2",{id:"constructing-a-transaction"},"Constructing a Transaction"),(0,o.kt)("p",null,"Now that we have covered cell collection, we can start the process of constructing a transaction. There are a series of concepts that need to be explained, including the construction of witnesses, the calculation of transaction fees and the use of some small tricks. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md"},"Refer to RFC0022 - Transaction Structure for more detailed information.")),(0,o.kt)("p",null,"All types are serialized based on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/molecule"},"molecule")," serialization system, the core struct is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"table RawTransaction {\n  version:        Uint32,\n  cell_deps:      CellDepVec,\n  header_deps:    Byte32Vec,\n  inputs:         CellInputVec,\n  outputs:        CellOutputVec,\n  outputs_data:   BytesVec,\n}\n\ntable Transaction {\n  raw:            RawTransaction,\n  witnesses:      BytesVec,\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"cell_deps")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"inputs")," are a series of pointers to live cells on the chain. The difference is that ",(0,o.kt)("inlineCode",{parentName:"p"},"cell_deps")," are a reference (read-only) and inputs are consumed in the transaction. The index struct for these transaction inputs is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"struct OutPoint {\n  tx_hash:        Byte32,\n  index:          Uint32,\n}\n\nstruct CellDep {\n  out_point:      OutPoint,\n  dep_type:       byte,\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tx_hash")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," are used to locate cells (a reference to the transaction that created them and the index number the cell appeared in the outputs). The ",(0,o.kt)("inlineCode",{parentName:"p"},"cell_dep")," has an extra ",(0,o.kt)("inlineCode",{parentName:"p"},"dep_type")," field, which is used to express whether the data in the cell is ",(0,o.kt)("inlineCode",{parentName:"p"},"code")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"dep_group"),". Code stored in multiple cells can be combined using the ",(0,o.kt)("inlineCode",{parentName:"p"},"dep_group")," functionality."),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"dep_type"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use value of 0 to indicate ",(0,o.kt)("inlineCode",{parentName:"p"},"code"),", meaning that the cell data can be used directly")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use value of 1 to indicate a ",(0,o.kt)("inlineCode",{parentName:"p"},"dep group"),", which means that the data in this cell is a redirect field (recursion is not allowed here). The referred ",(0,o.kt)("inlineCode",{parentName:"p"},"dep group")," data uses ",(0,o.kt)("inlineCode",{parentName:"p"},"vector OutPointVec <OutPoint>")," to list all needed outpoints. "))),(0,o.kt)("p",null,"An example of ",(0,o.kt)("inlineCode",{parentName:"p"},"dep_group")," usage: the default lock cell uses dep group functionality to divide the secp256k1 library into two cells to store the multiplication table and code. This is needed because block size is limited, if total dep data is too large to fit in one block, it can be stored in multiple cells (added in separate transactions confirmed in separate blocks) and later can be loaded together at runtime through the dep_group functionality."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"outputs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs_data")," are two one-to-one lists. There is only capacity and type/lock script in the ",(0,o.kt)("inlineCode",{parentName:"p"},"output"),". The output data is placed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"outputs_data")," corresponding to the index."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"header_dep")," is a list of past block header hashes. Header data referenced in this list can be accessed by CKB scripts during execution."),(0,o.kt)("p",null,"Now that the basics of the transaction structure have been explained, let's explore a slightly more complicated structure."),(0,o.kt)("h3",{id:"script"},"script"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"table Script {\n  code_hash:      Byte32,\n  hash_type:      byte,\n  args:           Bytes,\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"code_hash")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hash_type")," are used to specify a lock cell, ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," are the parameters required by the lock script. The ",(0,o.kt)("inlineCode",{parentName:"p"},"hash_type")," field has two possible values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'when it is "data" represented by 0, code_hash means lock cell\'s data hash'),(0,o.kt)("li",{parentName:"ul"},'when it is "type" represented by 1, code_hash means lock cell\'s type script hash')),(0,o.kt)("p",null,"It is very easy to understand what will happen when a ",(0,o.kt)("inlineCode",{parentName:"p"},"hash_type")," value of \u201ccode\u201d is used, but what about a value of \u201ctype\u201d? What does this mean for contract developers?"),(0,o.kt)("p",null,"When a value of \u201ctype\u201d is used, the value that is specified is a cell type script hash. The default lock script of CKB is indexed by type. The dep cells of the transaction will be examined for a cell that has this value as its type script, and the data in that cell will be used as the code for type script execution. "),(0,o.kt)("p",null,"To see how this functionality can be used, we can take a look at the implementation of TypeID, which is used to refer to a cell by reference. You can see that the type script of the second output of the genesis block is a TypeID script. If your published library also binds this TypeID script, it will generate a unique id(code hash) for indexing the data. You can then update the content of this library without changing the typeid. Any contract that references this library (by the unique type script value) will still work even if the library is changed. This is a solution to update on-chain libraries."),(0,o.kt)("h3",{id:"witness"},"witness"),(0,o.kt)("p",null,"Now that all ",(0,o.kt)("inlineCode",{parentName:"p"},"RawTransaction")," fields have been set, let's take a look at the witnesses field. This field ensures that the transaction cannot tamper with other transactions, and this field also allows inclusion of temporary variables that may be needed by the contract. It consists of a series of witnesses:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"table WitnessArgs {\n  lock:                   BytesOpt,          // Lock args\n  input_type:             BytesOpt,          // Type args for input\n  output_type:            BytesOpt,          // Type args for output\n}\n")),(0,o.kt)("p",null,"An input requires a witness for verification. However, including a witness for every input would be inefficient if multiple inputs used the same lockscript. When each individual transaction is verified, scripts will first be separated into groups (transactions with the same script hash will be grouped together) and then executed sequentially in units of script groups."),(0,o.kt)("p",null,"This is equivalent to combining multiple script verifications into a single execution, reducing resource consumption and the size of witness data. This does however require the developer to be aware when writing the script that it should consider the case of validating multiple cells in this way."),(0,o.kt)("p",null,"The witness is a signature on the blake2b-hash of the entire transaction, including ",(0,o.kt)("inlineCode",{parentName:"p"},"tx_hash"),", length, and a zero-ed out placeholder for witness data (once the signature is generated it will be placed in this field). The specific signing process and the convention regading how the witnesses for different script groups are arranged can be found in this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-system-scripts/wiki/How-to-sign-transaction"},"wiki"),"."),(0,o.kt)("h3",{id:"format-and-fee"},"Format and Fee"),(0,o.kt)("p",null,"Through the above process, we have obtained a complete ",(0,o.kt)("inlineCode",{parentName:"p"},"Transaction")," structure. At this time, to derive the absolute minimum fee that will be accepted by miners, we will need to do some backtesting (based on actual cycles consumed) and modification of the existing transaction."),(0,o.kt)("h3",{id:"how-to-estimate-a-transaction-fee"},"how to estimate A TRANSACTION fee?"),(0,o.kt)("p",null,"The transaction fee is the sum of the size of the serialized transaction (molecule) and the sum of actual cycles consumed by executed instructions. The size unit is 1,000 shannons / KB (kilobyte) by default (shannon is 1/100,000,000 of CKByte)."),(0,o.kt)("p",null,"However, miners can modify this default unit. If you need to see the real-time transaction fee estimate, you can view it through RPC using ",(0,o.kt)("inlineCode",{parentName:"p"},"estimate_fee_rate"),"."),(0,o.kt)("p",null,"If you want to use the lowest fee possible, you can continuously adjust the difference between the transaction\u2019s input capacity and output capacity and regenerate the transaction until you are satisfied (using a binary search)."))}u.isMDXComponent=!0}}]);