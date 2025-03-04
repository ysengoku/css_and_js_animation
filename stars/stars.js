window.addEventListener("DOMContentLoaded", () => {
	// 星を表示するための親要素を取得
	const sky = document.querySelector("#sky");
  
	// 星を生成する関数
	const createStar = () => {
	  const star = document.createElement("span");
	  star.className = "star";
	  const minSize = 1; // 星の最小サイズを指定
	  const maxSize = 2; // 星の最大サイズを指定
	  const size = Math.random() * (maxSize - minSize) + minSize;
	  star.style.width = `${size}px`;
	  star.style.height = `${size}px`;
	  star.style.left = `${Math.random() * 100}%`;
	  star.style.top = `${Math.random() * 100}%`;
	  star.style.animationDelay = `${Math.random() * 10}s`;
	  sky.appendChild(star);
	};
  
	// for文で星を生成する関数を指定した回数呼び出す
	for (let i = 0; i <= 200; i++) {
	  createStar();
	}

	const createShootingStar = () => {
		const shootingStar = document.createElement("div");
		shootingStar.className = "shooting-star";
		shootingStar.style.left = `${Math.random() * 100}%`;
		shootingStar.style.top = `${Math.random() * 20}%`;
		shootingStar.style.animationDelay = `${Math.random() * 5}s`;
		sky.appendChild(shootingStar);
  
		// 一定時間後に流れ星を削除
		setTimeout(() => {
		  sky.removeChild(shootingStar);
		}, 2000);
	  };
  
	  // 一定間隔で流れ星を生成
	  setInterval(createShootingStar, 2000);
  });
