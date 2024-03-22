import React, { useState, useEffect } from 'react';
import { NaverMap, Marker } from 'react-naver-maps';

function MapComponent({ latitude, longitude }) {
  const clientId = 'wso9ppyxtb'; // 실제 발급 받은 클라이언트 ID
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData(); // 데이터를 받아오는 비동기 함수 호출
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);

      // 여기서 데이터를 받아오는 API 호출 또는 비동기 작업 수행
      // 예시로 setTimeout을 사용하여 1초 후에 지도를 렌더링한다고 가정합니다.
      setTimeout(() => {
        setIsLoading(false); // 로딩 상태 해제
      }, 1000);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error); // 에러가 발생한 경우 에러 상태 업데이트
      setIsLoading(false); // 로딩 상태 해제
    }
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          <NaverMap
            ncpClientId={clientId} // 클라이언트 ID 전달
            style={{
              width: '100%',
              height: '400px',
            }}
            initialPosition={{ lat: latitude, lng: longitude }}
          >
            <Marker
              ncpClientId={clientId} // 클라이언트 ID 전달
              position={{ lat: latitude, lng: longitude }}
              icon={{
                url: 'https://ssl.pstatic.net/static/maps/marker/image/pin_spot_v3.png',
                size: { width: 22, height: 35 },
                origin: { x: 0, y: 0 },
                anchor: { x: 11, y: 35 },
                iconColor: '#FF0000', // 마커 색상 지정
              }}
            />
          </NaverMap>
        </div>
      )}
    </div>
  );
}

export default MapComponent;
