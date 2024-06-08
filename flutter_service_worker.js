'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eeeb0ac92cc1f191242cf0261316756d",
"assets/AssetManifest.bin.json": "59d99638c671d72459ff1b590e1a40f9",
"assets/AssetManifest.json": "794ccdded2fe2704f8a3a483f643fd9e",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/fonts/Tajawal-Medium.ttf": "3358032dd0994cf4a2116f0b16f80d70",
"assets/assets/images/agricultrice.jpg": "89b914a24abdfc899e4eb4607edd6f61",
"assets/assets/images/avatar.jpeg": "ef670dc9cb8537b1f8d9e849988f4f97",
"assets/assets/images/background.jpg": "1512324c4794528b559eb296ce6a17b5",
"assets/assets/images/logo1.jpg": "54349974cffa83cdabdb19c6cd66836b",
"assets/assets/images/logo3.png": "3314814b88d6bd7f3c658ecae5bb1e28",
"assets/assets/images/Luna.mp4": "bddec0159febae22c4b21677e4cb9314",
"assets/assets/images/robot.png": "f2636320661fc18273b35531f2e36780",
"assets/FontManifest.json": "3498f0ba5e8c2ec2f117f05fb92fdd79",
"assets/fonts/MaterialIcons-Regular.otf": "5d9cf5f87d3d6c0ac33c2116895225b8",
"assets/NOTICES": "f8310c010761a710aa9b20487b9850f4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "391ff5f9f24097f4f6e4406690a06243",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/youtube_video_player/assets/icons/10for.svg": "4644c2a813bc49c8340ef71e1e9cef84",
"assets/packages/youtube_video_player/assets/icons/10rev.svg": "2f6a0c12e583046f4aa6e6f419523acc",
"assets/packages/youtube_video_player/assets/icons/back.svg": "38a4852630d910fc229f62358e30dc2b",
"assets/packages/youtube_video_player/assets/icons/back_icon.svg": "56bf714f85c0c5acb05c4dbe9410d2a4",
"assets/packages/youtube_video_player/assets/icons/brightness.svg": "d5ffb49dda04cff59678feb4746f3e39",
"assets/packages/youtube_video_player/assets/icons/cross.svg": "eb2bea09b48f76e8154a7b6a81ed13fd",
"assets/packages/youtube_video_player/assets/icons/fullscreen.svg": "bc7c1af4c02e0650fcc12119c234a650",
"assets/packages/youtube_video_player/assets/icons/lock-open.svg": "af02052dc30fad93c45e5e1205772071",
"assets/packages/youtube_video_player/assets/icons/lock.svg": "a8ffd526543a85611e52c3c8777a3d23",
"assets/packages/youtube_video_player/assets/icons/minimize.svg": "1ca10554f7c3b27809f44934bfd26bdc",
"assets/packages/youtube_video_player/assets/icons/minus.svg": "4691d016b13dd0f17958b32500f1c3a4",
"assets/packages/youtube_video_player/assets/icons/mute.svg": "9a64dc74219f5b1be51629654c199804",
"assets/packages/youtube_video_player/assets/icons/pause_video.svg": "c01aeaefd13df48e6abf50e622e40d6a",
"assets/packages/youtube_video_player/assets/icons/play.svg": "4de408be887d1b567710f60c94a162f6",
"assets/packages/youtube_video_player/assets/icons/play1.svg": "5f7e444b03e858113287afd78456e6c7",
"assets/packages/youtube_video_player/assets/icons/playback.svg": "8046bfd3105cf2d0bda8d5edb00c5adc",
"assets/packages/youtube_video_player/assets/icons/playIcon.svg": "6d9bd3af247a5fe27e1878d8d04d5892",
"assets/packages/youtube_video_player/assets/icons/play_video.svg": "3e4063970372db32cc7c788b8399cd61",
"assets/packages/youtube_video_player/assets/icons/settings.svg": "9ffe5a2f803a4b0afe25ff045fbd90b9",
"assets/packages/youtube_video_player/assets/icons/volume.svg": "c4ca7937bb38ad50d8ec868043251f5f",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a4df8eb3ef719c0629047d586d1a5cec",
"/": "a4df8eb3ef719c0629047d586d1a5cec",
"main.dart.js": "7deb2e03fb82ec091ac8f5101a964094",
"manifest.json": "c69957d3911c37992f4ef06ebd9d2e1c",
"version.json": "f4a622543a6085ec9bb58ec52b631736"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
