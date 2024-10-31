import "./greyPart.css";

function GreyPart() {
  return (
    <div className="greyDiv">
      <div className="greyP">
        <div>
          {" "}
          <p>
            Я надолго запомню мой День рождения, проведённый в этом ресторане!
            Кусочек родной Армении!!! Отдельное спасибо за комплепент в виде
            фруктовой тарелки. Будем рекомендовать этот ресторан своим друзьям и
            родственникам также за рубежом, путешествующих в Санкт-Петербург!!!
          </p>
        </div>

        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/9ae6/d714/cac3ffbca7363e42e864eca2179f992e?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YUHbBRKPcKDO7BKsHbk5MNQYLavW8D-0a9R~OcO4446yMECRbfISci4vl6a095UazKjV9MRRNgYBhCgbpdK-3y3b8mKawpwp1Cm8v~ycacM3sRCpzTxy4buT7o5SfGHxpNbq9079sq5XvKEbhmxVA7wm2-rPFEyqDOCc5pYYWNY5f4sV8vsSI2jE~U25-S6Fe4O7qevkTi2UpkiT5rkaoTiH4-SDzwW5fYTh3yxW2E9MpYp-IGwnO7Rkqa2WsKIG0RVIf-XiBR3C3Aw7yfdbJS4GGPVs6hhi~iviLeaVKdHqKKV-znEdmuPHGDOsWUBitsZbzbynvJk6QSx~p3q8WQ__"
            className="menImg"
          ></img>
        </div>
        <div>
          <span className="visitor">Посетитель</span>
        </div>
        <div>
          <span className="Nikolay">Николай</span>
        </div>
      </div>
    </div>
  );
}

export default GreyPart;
