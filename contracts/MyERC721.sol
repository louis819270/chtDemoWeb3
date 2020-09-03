// contracts/MyNFT.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyERC721 is ERC721 {
    constructor() ERC721("YAAA", "YA") public {
    }

    function mintUniqueTokenTo(
        address _to,
        uint256 _tokenId,
        string memory _tokenURI
    ) public {
        super._mint(_to, _tokenId);
        super._setTokenURI(_tokenId, _tokenURI);
    }
}
