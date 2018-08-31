var playlist = {
  "Old MacDonald": "had a farm"
};

console.log(playlist);

function updatePlaylist(obj, key, value) {
  obj[key] = value;
  return obj;
}

console.log(playlist);

updatePlaylist(playlist, "some artist", "some song");

function removeFromPlaylist(obj, key) {
  console.log("obj:"+obj.);
  console.log("key:"+key);
  delete obj.key;
  console.log("obj after delete:"+obj);
  return obj;
}

removeFromPlaylist(playlist, "OldMacDonald");

