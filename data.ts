const album = {
	"album_name": "MY WORLD",
	"artist": "Aespa",
	"release_date": "2023-05-08",
	"label": "SM Entertainment",
	"genre": "K-Pop",
	"tracklist": [
	  {
		"track_number": 1,
		"title": "Welcome To MY World (feat. nævis)",
		"duration": "3:26"
	  },
	  {
		"track_number": 2,
		"title": "Spicy",
		"duration": "3:17"
	  },
	  {
		"track_number": 3,
		"title": "Salty & Sweet",
		"duration": "2:57"
	  },
	  {
		"track_number": 4,
		"title": "Thirsty",
		"duration": "3:05"
	  },
	  {
		"track_number": 5,
		"title": "I'm Unhappy",
		"duration": "3:18"
	  },
	  {
		"track_number": 6,
		"title": "‘Til We Meet Again",
		"duration": "3:29"
	  }
	]
  };
  
  // Menampilkan semua data sebagai JSON
  console.log(JSON.stringify(album, null, 2));
  
  // TODO 1 : Dapatkan semua data
  console.log("Semua data dalam format tabel:");
  console.table(album);
  
  // Filter lagu dengan nomor track lebih dari atau sama dengan 3
  const minTrackNumber = 3;
  const filteredByTrackNumber = album.tracklist.filter(track => track.track_number >= minTrackNumber);
  
  console.log(`Lagu dengan nomor track lebih dari atau sama dengan ${minTrackNumber}:`, filteredByTrackNumber);
  
  // Filter lagu yang judulnya mengandung kata tertentu
  const keyword = "Spicy";
  const filteredByTitle = album.tracklist.filter(track => track.title.toLowerCase().includes(keyword.toLowerCase()));
  
  console.log(`Lagu yang mengandung kata "${keyword}":`, filteredByTitle);
  
  // Filter lagu yang durasinya lebih dari 3 menit (180 detik)
  function convertToSeconds(duration) {
	const [minutes, seconds] = duration.split(":");
	return parseInt(minutes) * 60 + parseInt(seconds);
  }
  
  const filteredByDuration = album.tracklist.filter(track => convertToSeconds(track.duration) > 180);
  
  console.log("Lagu dengan durasi lebih dari 3 menit:", filteredByDuration);