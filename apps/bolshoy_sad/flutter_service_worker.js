'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "385c2270c77db951261dfe48201c5f5b",
"assets/AssetManifest.bin.json": "e25ca309fc98f78cb214234fceae7a18",
"assets/AssetManifest.json": "610e28e24ba1d9f1a71749d0874560fa",
"assets/assets/images/Battery.svg": "474f96d0c0bf5f858d4ef0433b67d6a4",
"assets/assets/images/bs_img.jpg": "1b61420837d319dfa23177698b6fd1bf",
"assets/assets/images/bs_logo.jpg": "7371856b2ca95b875c7facde6865812c",
"assets/assets/images/Car.svg": "c107e2f45508f3218d9facbd1213262c",
"assets/assets/images/Charge.svg": "ab0782a476e15b5b1349dbc50d5bdd2f",
"assets/assets/images/coolShape.svg": "a1408ffdb02131c0c79ecd08133eb461",
"assets/assets/images/Cool_glow_2.htm": "2c1dfbb73ecb24627ce1d57a17d6af5b",
"assets/assets/images/Cool_glow_2.png": "8a4cb391c923867f5fd9f800291570ca",
"assets/assets/images/door_lock.svg": "bf3aa07304038a710952ee51baa3842f",
"assets/assets/images/door_unlock.svg": "4428bb6d2e4d68088b5ab0e2c2472dba",
"assets/assets/images/FL_Tyre.svg": "64d081a1f8d154433f2b2ef8a3cb8967",
"assets/assets/images/heatShape.svg": "0c382ed10754bb1810808673a6c1f429",
"assets/assets/images/Hot_glow_4.htm": "8703e351f5168d945d4b9d6e73abcc7e",
"assets/assets/images/Hot_glow_4.png": "4536984871d5189b8eb790b862136f3a",
"assets/assets/images/Lock.svg": "361a489322337e549a99fac217dc15c5",
"assets/assets/images/logo.svg": "668cb58e0c557f252fd2a4be8a407574",
"assets/assets/images/logo_samokat.png": "43a0d88a3c59e6d44e31e77fc7b0f2d7",
"assets/assets/images/magnit_logo.png": "8cab4beee5b1084b741a9c63ba8a5d71",
"assets/assets/images/monetki.png": "ae39266cd277fa7dc23fed388cd6d6e2",
"assets/assets/images/Temp.svg": "db9b7aa5cd64754429fb486277e185a2",
"assets/assets/images/Tyre.svg": "907410b9f30982fce265619571d1ec7c",
"assets/assets/images/verno.png": "fa6b574c214941a28747e197aa81d482",
"assets/assets/images/windows_maximize.svg": "a422bfae07b20a18732fc744c1024a1c",
"assets/assets/images/windows_minimize.svg": "529007a5e75757767bf2eb3760842a3d",
"assets/assets/images/windows_minimize_.svg": "39b42c37b8d81a505a2629997193f680",
"assets/assets/images/x5_logo.png": "fd2e8487472fc367ce6228c8ce344527",
"assets/assets/timezones.json": "d6d5173a8955f111cddb04cffd9585da",
"assets/assets/time_zone.sql": "eec8d493a3f60f943f64b6195e2742d2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e77ea3666c29c6f73c3301bc2a7fe2ca",
"assets/NOTICES": "ab5cad7dc55a48c87ef58aacc8fe4eca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "c06224395015e983323d3e48be56eac4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3ee25d60f553e046f2c5c15cab7a1384",
"/": "3ee25d60f553e046f2c5c15cab7a1384",
"main.dart.js": "49d43d8539a82de16ef78333d0eba77c",
"manifest.json": "b380085c9b04caa106b4771da2d091a4",
"version.json": "18441610f7bff36a49162408091a790c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
