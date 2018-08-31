var playlist = {
  "Old MacDonald": "had a farm"
};

console.log(playlist);

function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj;
}

playlist;

updatePlaylist(playlist, "some artist", "some song");

function removeFromPlaylist(obj, key) {
  delete obj.key;
  return obj;
}

removeFromPlaylist(playlist, "OldMacDonald");

