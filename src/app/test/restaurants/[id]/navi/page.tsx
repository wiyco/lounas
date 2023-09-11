"use client";
import "./style.scss";

import ArrowDown from "@icons/nav-arrow-down.svg";
import Warning from "@icons/warning-circle.svg";
import Image from "next/image";
import Map from "public/test/map.webp";

import { RectButton } from "@/components/buttons/RectButton";
import { CardFull } from "@/components/cards/CardFull";

export default function RestaurantsPage() {
  const start = "コクーンタワー地下出口";
  const destination = "らーめん新宿西口店";
  const time = "3分";
  const far = "300m";
  const onclick = () => {
    console.log("click");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="title">ルート案内</div>
        <div className="guide">
          <div className="information">
            <div className="distance">{`${time}(${far})`}</div>
            <div className="route">
              <div className="start">{start}</div>
              <div className="arrow-down">
                <ArrowDown />
              </div>
              <div className="destination">{destination}</div>
            </div>
          </div>
          <div className="external">
            <div className="map-img">
              <Image className="img" src={Map} alt="map" sizes="w-fit" />
            </div>
            <div className="preview">Coming Soon!</div>
            <div className="link">アプリでルートを確認する→</div>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="warning">
          <div className="icon">
            <Warning />
          </div>
          <div className="request">歩きながらの使用はお控えください。</div>
        </div>
        <CardFull image="/test/route.webp" description="こんにちは" navigation="straight" />
        <CardFull image="/test/route.webp" description="こんにちは" navigation="straight" />
        <CardFull image="/test/route.webp" description="こんにちは" navigation="straight" />
        <CardFull image="/test/route.webp" description="こんにちは" navigation="straight" />
        <CardFull image="/test/route.webp" description="こんにちは" navigation="straight" />
      </div>
      <div className="footer">
        <RectButton text="終了する" color="red" onClick={onclick} />
      </div>
    </div>
  );
}
