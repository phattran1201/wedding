const Bus = () => {
  return (
    <div>
      <h3>🚌 전세버스</h3>
      <h4>☞ 서울 방면</h4>
      <p>8:30 고속터미널역 8-1, 8-2 출구 사이</p>
      <p>9:30 부천시민회관</p>
      <p>11:50 부여 롯데리조트 도착</p>
      <h4>☞ 경남 방면</h4>
      <p>10:00 창녕 영산면사무소 앞</p>
      <p>12:10 부여 롯데리조트 도착</p>
      <h3>🚎 시외버스</h3>
      <p>{'서울남부터미널 ☞ 부여시외버스터미널'}</p>
      <style jsx>{`
        p {
          line-height: 1.5rem;
        }
        h3 {
          margin: 2rem 0 1rem;
          font-size: 1.3rem;
        }
        h4 {
          font-size: 1.2rem;
          margin: 1rem 0;
        }
        span {
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Bus;
