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
  
  // Log album data as JSON
  console.log("Album Data:");
  console.log(JSON.stringify(album, null, 2));
  
  // Tampilkan data dalam tabel
  console.log("Tabel Album:");
  console.table(album);
  
  // Filter tracks with track number ≥ 3
  const minTrackNumber = 3;
  const filteredByTrackNumber = album.tracklist.filter(track => track.track_number >= minTrackNumber);
  console.log(`Tracks with track number ≥ ${minTrackNumber}:`);
  console.table(filteredByTrackNumber);
  
  // Filter tracks with title containing "Spicy"
  const keyword = "Spicy";
  const filteredByTitle = album.tracklist.filter(track => track.title.toLowerCase().includes(keyword.toLowerCase()));
  console.log(`Tracks with title containing "${keyword}":`);
  console.table(filteredByTitle);
  
  // Filter tracks with duration > 3 minutes (180 seconds)
  function convertToSeconds(duration) {
	const [minutes, seconds] = duration.split(":");
	return parseInt(minutes) * 60 + parseInt(seconds);
  }
  
  const filteredByDuration = album.tracklist.filter(track => convertToSeconds(track.duration) > 180);
  console.log("Tracks with duration > 3 minutes:");
  console.table(filteredByDuration);
