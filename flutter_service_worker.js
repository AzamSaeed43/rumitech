'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7c4a909097b4b1919fbb688d138e0b43",
"version.json": "f1457c45ac6020dbbfc5199872a2d770",
"index.html": "a933fbb5307a69a0ff00b5b36aeb70a4",
"/": "a933fbb5307a69a0ff00b5b36aeb70a4",
"main.dart.js": "4fbb44a701e66a2a57862699b37f111b",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".github/workflows/jekyll-gh-pages.yml": "f1426d21779c4d3e8e25012c689ee6ec",
"manifest.json": "dbcc727970d017c9c24314efecb113e7",
".git/ORIG_HEAD": "e6d49de32a9edd3a4ad36ebfcb8ab7a9",
".git/config": "9441176cf5070067409f7b57a7538331",
".git/objects/0d/9f74a2ed52a7bbd0dfc1c4656f02365464203a": "77885fa9f0389f0033be6f7fb251e3ae",
".git/objects/92/4d8a22672609026514522ba4fe548966cecc71": "2f5892bfdbe1d5ca628eef2f99161a40",
".git/objects/92/17413155c6d24e6a13ac13fa1f6493e09e0f49": "df5eae31fa0405a60ce40956822b7cce",
".git/objects/3e/fb6f6fb2fcc6f33405be7a19a2c16562f2b986": "65a28a45d2e6a2cf0199203be890c181",
".git/objects/03/70067dd22c7587ee6263e8945134257df294d3": "6cefff3d807b61a4a7ae37b2b07105a3",
".git/objects/6a/0462cc3a9f706360ffdac12ec42f904e3f5847": "2cea57bc062abcbec50afcf17d7f2829",
".git/objects/69/c12dec34b3b467e470709eb88a786ca097ab78": "5d1b69ba9193ce765d328e1c83c775d0",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "712103cb62bcc6ba0f73e804ac2aff0a",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "35053f47108c39a22d7701d6692a327e",
".git/objects/0e/bd768bf2aa9d1fa618e323e1ac433522e144cb": "51d6fab4065e2515c9c1381136ecea72",
".git/objects/ad/8046cb5b382b930891d4b0de697480af60bcd7": "1c27dd403465949e360b0242c7748c04",
".git/objects/ad/6f6844623d373541213c1a9552e12fa5716045": "0fb11d554550ed1fa393cb67cd85cf06",
".git/objects/a5/81430bc8eac852b740e786db5d1121f79dc602": "e8794af683a7fac20ff99bd8d8d5f725",
".git/objects/d1/b34f8135bf5ab5d10be431f791f67de76c34c6": "4028605853207af61e191a5c91997f2a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3655e2595dff3e9a6535903ae76f08bb",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "37cad92099f04613e2e5e95b94279313",
".git/objects/bc/26931f206a60a9e4d678070406ba47dbfd9262": "e35e04a62d5f11f1826f260765a9d370",
".git/objects/d8/43f340d228380d0809b446083dfc066e5de60a": "512d734dc4a167172265a1c75934af1b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "7dbbc94a8e35ee815b1d45df01b3842e",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "572df7ea825640d0c047928365a3af96",
".git/objects/c0/2f59a96eb2df1882d3b813f925cf2940537918": "a02fb7879d8618d09e732b162e1fc913",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "a3bcb2075c8ac99bd68c577183925bd2",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "61ad2a8e50ae1f345515cac0350ea694",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "204eefb936c0cfc976b76cdbc11ee1a0",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "2890c56902557df3d8f2a069465f4e38",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "42e2785f7370bfb054a9d49f6f4e8c37",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "88bed9af2d3088700c72a2553c14db1d",
".git/objects/29/ff30644af9ae118c0df8e4529f68224ab2d1b2": "d28e2e82c944d4cb02acd0aa9f18490a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "d0fd8dae38f25b016ad3c97adc6687bb",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "0630e987301e61dd5ae2d5be81890311",
".git/objects/7b/cc0f9d40897e58119d3c80e58cbe2ca8830033": "52cb44fe32f00f54fec6798b41e752e2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "935f6777d5a34b22eac29575fdf07a81",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "f60f235153780ad72779ded1dd438918",
".git/objects/19/45ce5fde8e638a257ece98c8cad610f4fc6dfb": "01f824658ba2b70ddf8e3b5a2a84984e",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "26435ade8b83e539c1fc4d8d70216930",
".git/objects/21/812f9a58112bd824712d165d5351ab0d4de279": "5778f61619da1c2e6f49cd05111551dd",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "16f6bc347115cc591fd747e883261b83",
".git/objects/81/07865c71eb22ba9ffdc5818ea0818d8543323d": "e43eadb38dc5a0eaa4c4a970d4a8d1a7",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "4bfb27a5b987a80ae089243dae02a2e5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "741ebbc8fe0e42c5efc5679e00865b0e",
".git/objects/5c/731bb1b38cca7e4370ae7e913d57b49f568d99": "7a5155ae04d8c59b7280b94b5337a444",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "b6dbeff3b96b24446d02af3f28016f3f",
".git/objects/53/5412a3faf39e7444be38179a47cfa304aced47": "60292dd82a6ae30c00c080c53f97bc07",
".git/objects/5b/4603ac3131d5a33e5ea8bd53cca8a72ca0ee66": "f743489e551bdc4dbe7ed176af7bbad1",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "4bea79c98a6a900fe8234b0e50b759c5",
".git/objects/01/78dc4c943c31266942b248970a0f9343bbc726": "17dc96edcd78ca98d173ea3ebf6b9561",
".git/objects/52/cd7b1dee02392ebda5c09bbad7541bd0256683": "84fcfdd62141c075017afbd6b41bc735",
".git/objects/55/101765a891c17be1bb9d8f399e674ecccdb70d": "463d5072e67a4f28e98444814ebf0e0f",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "d28f9255d6a07b2bed7db5076d209e05",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "5f9ac2f10819bdc8747c7f78725795e9",
".git/objects/bf/6d9d2a3cf47c7ad096c779dd74db29e43de741": "6e923cddfc16e80e5295fef8a7996d7d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "43dc1abdf318479619f8ba30d339447d",
".git/objects/d4/cce0de9f9bce7e0c885a9efb0c0701f50ec83d": "7e90a21b19e8f96447396c174eafda2b",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "e1b2348eb33c03f0835c928d4c9b65f8",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "61886305a27a3edc9485ae96c5c20381",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "4246293d31123b916bd9b324127284ee",
".git/objects/dc/a9c3459b42ad4a64394d07f133c48075ce4c71": "6d89938b000efacfe28b67b90cd890c4",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "90379e982b841ce41e26a2dcc01018bf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "4205eef49190d51b728a5fe78bc74582",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "4adf46374f95b9427c9fef44980c448c",
".git/objects/b9/604df0dd8c8ccb8fb02646ca9f51ccc63d207e": "cbdbb3eccbf8ad9cd8a36cd02adda4c0",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "d98c499e1632eec9bde9494f991e6c2d",
".git/objects/e6/40820425c5e307909d6f6a639deecbb11017ed": "487379d65ebb2c869d8c73ceb0e7c916",
".git/objects/f1/a23ef747b9c941ce854f2c765cb92c5296d021": "3aaf94b4ef807f9f90f1859d4ee9d0ea",
".git/objects/cb/ceb439577c0bf4965a8bc6cda0d9bab48aa6e8": "a4114a4e682c4f4599e3fa2372fe5313",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "4b82e8a451138284a42647b622432b38",
".git/objects/2c/37b6effdebf0dd74d42697072165cc18295b03": "4c1043f3a9c5719dd25fb09373c669bb",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "220b4b79fb8340559f63750eb197c0eb",
".git/objects/41/5631fb334ad925b847780813ce7d37f5368811": "fedfdd4218de3673c903fe1485248c40",
".git/objects/77/6b8cce3a0cf3ed40c037db18f0f9117400ac3a": "d4bec1e2beff6ca5d05a9f849f1a16cb",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "979f043d184157d986d216f23bb1a51c",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "ecf556612d12b1699c525fbaa4b3f83b",
".git/objects/8d/f23e6551af6cbcfe27d317a36da199063c3118": "28694d0cb63b7b404cd4ac95396e6ca6",
".git/objects/85/b18d4077be51ec66d13542601a45ae6d6eedbd": "fcb71ed98005619c7ab3be732f54b588",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "2d2bdf59a2e4b0485d9cb0a96c246b66",
".git/objects/2e/ed06b026f291af7e34327042a387c80c4a9322": "64437563906bf1287f891cde8c01c464",
".git/objects/47/490e7ee30b2999d497a5026f9e587607f8822f": "74f17ff3df2385b0518befa3d5ee416f",
".git/objects/13/3d48e80e981f27f450c201b3a182804083ed62": "69b8cfbe03b244d52de0fe94551b4b98",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "24fdc23f0061c608f90b78ae78148c2d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "e88359b25aa09d7e2c8351489cf140b3",
".git/logs/refs/heads/master": "6d7a2f34a41a02ef8259a523cfdbe9c0",
".git/logs/refs/remotes/origin/master": "82c2b94d093f847a395829e6816b96c1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "7696776e8ea3a761d7367629967c01b2",
".git/refs/remotes/origin/master": "7696776e8ea3a761d7367629967c01b2",
".git/index": "e6edb86df2b67a5376247fa924703cba",
".git/COMMIT_EDITMSG": "c59332641788e7772639f4dc54d4f5d3",
".git/FETCH_HEAD": "083a0ebd553087006be0fd78f00b22a8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "119bdf427e3dc696bd12cb977c720e80",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "37daa6c1efb380c3b7747776d43eaf82",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
".idea/vcs.xml": "166acef3d301bd241d0d6da15bc5ad3c",
".idea/workspace.xml": "24b1d2e4667d6bb68ebfabf665cab235",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "dd99d68e9eecd09ad6667609ff8e9862",
".idea/caches/deviceStreaming.xml": "88fd1da535b501397ef0e6d06299aa5b"};
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
