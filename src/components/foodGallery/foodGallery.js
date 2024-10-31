import "./foodGallery.css";

function GalleryFood() {
  return (
    <div className="foodGallery">
      <p className="galleryText">
        Галерея <span> Блюд</span>
      </p>
      <div className="imagesDiv">
        <div className="imgPart1">
          <div>
            <img
              className="dinnerImg"
              src="https://s3-alpha-sig.figma.com/img/cfcb/df54/32001dc7e1e594535b7425a90252bd7c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eqd0bqAlA0si1nmlaDZ9J2rT3cF7mIVM4HqMxd-68al~Mu7gfZ~KoCisx8SMpYR4Vs-u2ndzszvoHqUJr~-McjY2cCYUXl~wMPk7dInoJ43bwxDrgRnapLecYR0IBHShfdcIE~A4--AQ~ffYDGBxK5yzrfWxG1jO~Yg~u5QiH9n8s4LchJsKW9s3pep3K8eDW4tDPQ3AiqIkgTMxYUStU68kPYP6XM3lFnicWRwpchi1It~ih0pqFNkVHfKUbZccLSCjIbhX707q~OyvYSX6K~Jm4wPR-gpAtQEZw2liEbcgFCiBFcF3D1~Bsa3qd4CIXb2jcQ9xHHTprWmIgRTWcg__"
            ></img>
          </div>
          <div>
            <img
              className="coffeeImg"
              src="https://s3-alpha-sig.figma.com/img/0ea3/063a/4857067ceec16140669053e718bcba74?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=APHpk8QmMl2wdlgpq0aRxh1aQ15Ue3IA~oE2fjkrVOuqR5-R13Togp9t7NdKXN0PeGlt7H7gGC3HozUTa52F6Vne8WLf9qbUW5DiVF2l5KGghawFprN5VXBdCH0ylduDM4pp~oC5c~zrP~Q3OI9siJ1VCKYgLLZBjIQCySzzT2raANAKDn9EVWDnfES5QFKpRJyJUBmT4BuM8i7lOKjxsqPwV8g60koN8FBkp5Wh2jG7PTK1xgMVyPDKVz4rrrxIa8BPBfEuEbHgiYXAxs~vCLIgCSagcfg2ikqwtx4NGcS-N9c7CqB~XumoNFOcMTnSlqszIpJyRkB5Uqb8g6bY7w__"
            ></img>
          </div>
          <div>
            <img
              className="soup"
              src="https://s3-alpha-sig.figma.com/img/efce/a199/2ad83b038d9646fed2c43808ba01ceca?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YUA3FKjkIPJolBBI7reKf6sffgRxE6DDiw6VZepdpnoXy4Z5nPUpzEPYfTpviqkVtG~oOSw~Oq-AlYQgdXqLn0qeu4VWRtPxWH78mW94R0jZw70s1p9AxFapTR6tO-JmuMjpA95R6AgRLSPPbMjmHGTvOSbwAzgz8N2TM~2eRvSFRVecJDu7RXTiMprZ5XTCoFtcayvZ8JeddzlX1V0rq-eyHtrIbRMHu1nk~3~3l-bkeZnN8YZKloguWCrwimQyNYAze9jRFc-BpSNxZlowgEoxmKlj6ZvX7ei6jOFm1Iu-wN~0gqoqu6mQ~1EX1ADP~bwv5rh1uOPIalJWsLm9rQ__"
            ></img>
          </div>
        </div>

        <div className="imgPart1">
          <div>
            <img
              className="coffeeImg"
              src="https://s3-alpha-sig.figma.com/img/0ea3/063a/4857067ceec16140669053e718bcba74?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=APHpk8QmMl2wdlgpq0aRxh1aQ15Ue3IA~oE2fjkrVOuqR5-R13Togp9t7NdKXN0PeGlt7H7gGC3HozUTa52F6Vne8WLf9qbUW5DiVF2l5KGghawFprN5VXBdCH0ylduDM4pp~oC5c~zrP~Q3OI9siJ1VCKYgLLZBjIQCySzzT2raANAKDn9EVWDnfES5QFKpRJyJUBmT4BuM8i7lOKjxsqPwV8g60koN8FBkp5Wh2jG7PTK1xgMVyPDKVz4rrrxIa8BPBfEuEbHgiYXAxs~vCLIgCSagcfg2ikqwtx4NGcS-N9c7CqB~XumoNFOcMTnSlqszIpJyRkB5Uqb8g6bY7w__"
            ></img>
          </div>
          <div>
            <img
              className="soup"
              src="https://s3-alpha-sig.figma.com/img/efce/a199/2ad83b038d9646fed2c43808ba01ceca?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YUA3FKjkIPJolBBI7reKf6sffgRxE6DDiw6VZepdpnoXy4Z5nPUpzEPYfTpviqkVtG~oOSw~Oq-AlYQgdXqLn0qeu4VWRtPxWH78mW94R0jZw70s1p9AxFapTR6tO-JmuMjpA95R6AgRLSPPbMjmHGTvOSbwAzgz8N2TM~2eRvSFRVecJDu7RXTiMprZ5XTCoFtcayvZ8JeddzlX1V0rq-eyHtrIbRMHu1nk~3~3l-bkeZnN8YZKloguWCrwimQyNYAze9jRFc-BpSNxZlowgEoxmKlj6ZvX7ei6jOFm1Iu-wN~0gqoqu6mQ~1EX1ADP~bwv5rh1uOPIalJWsLm9rQ__"
            ></img>
          </div>
          <div>
            <img
              className="dinnerImg"
              src="https://s3-alpha-sig.figma.com/img/cfcb/df54/32001dc7e1e594535b7425a90252bd7c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eqd0bqAlA0si1nmlaDZ9J2rT3cF7mIVM4HqMxd-68al~Mu7gfZ~KoCisx8SMpYR4Vs-u2ndzszvoHqUJr~-McjY2cCYUXl~wMPk7dInoJ43bwxDrgRnapLecYR0IBHShfdcIE~A4--AQ~ffYDGBxK5yzrfWxG1jO~Yg~u5QiH9n8s4LchJsKW9s3pep3K8eDW4tDPQ3AiqIkgTMxYUStU68kPYP6XM3lFnicWRwpchi1It~ih0pqFNkVHfKUbZccLSCjIbhX707q~OyvYSX6K~Jm4wPR-gpAtQEZw2liEbcgFCiBFcF3D1~Bsa3qd4CIXb2jcQ9xHHTprWmIgRTWcg__"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryFood;
