# [4.47.0](https://github.com/tokyodrift1993/Ombi/compare/v4.20.0...v4.47.0) (2024-11-24)


### Bug Fixes

* :bug: Fixed missing externals ([#4712](https://github.com/tokyodrift1993/Ombi/issues/4712)) ([fcc1eaa](https://github.com/tokyodrift1993/Ombi/commit/fcc1eaaa377683dcdc81d62a2a688fb0c4490c7b))
* :bug: Fixed the Request on Behalf of having blanks ([#4667](https://github.com/tokyodrift1993/Ombi/issues/4667)) ([7dd9b1c](https://github.com/tokyodrift1993/Ombi/commit/7dd9b1cac07f571dd35b362544e4fe0226c4b817))
* **#4847:** Invalid Discord request fixed, also fixed an issue where App Only users would not show as logged in on the user management page ([#4848](https://github.com/tokyodrift1993/Ombi/issues/4848)) ([f229d88](https://github.com/tokyodrift1993/Ombi/commit/f229d88bd744bc5253b5d3db69ae5ef22d014230))
* **#4906:** :bug: Fixed an issue with power users and permissions ([80884bc](https://github.com/tokyodrift1993/Ombi/commit/80884bcd725c329867c278ad235cd4096cd4fe7a))
* added media type tag to media type text ([#4638](https://github.com/tokyodrift1993/Ombi/issues/4638)) ([fe501d3](https://github.com/tokyodrift1993/Ombi/commit/fe501d34a0c36ac9f000b107eca49dbc6694d006))
* **API:** Allow RequestOnBehalf rights if requested from the API ([#4919](https://github.com/tokyodrift1993/Ombi/issues/4919)) ([bb6dedd](https://github.com/tokyodrift1993/Ombi/commit/bb6deddfaecb3d6c7c3c6970414444b619bb9106))
* **API:** Fix pagination in some edge cases ([#4649](https://github.com/tokyodrift1993/Ombi/issues/4649)) ([a70bf8f](https://github.com/tokyodrift1993/Ombi/commit/a70bf8f46c76d74c9dfdf908c53bd9955ca0a35d))
* **availability:** 🐛 Fixed a issue with the availability checker after the previous update. Added full test coverage around that area ([28e2480](https://github.com/tokyodrift1993/Ombi/commit/28e248046ad56390595f84172bbd5f5961325b4d))
* Consistently reset loading flag when requesting movies on discover page. ([#4777](https://github.com/tokyodrift1993/Ombi/issues/4777)) ([a40ab5c](https://github.com/tokyodrift1993/Ombi/commit/a40ab5cddf769d4147696eca50c1610b466ab99b))
* Cron Validation ([#4842](https://github.com/tokyodrift1993/Ombi/issues/4842)) ([97cc42f](https://github.com/tokyodrift1993/Ombi/commit/97cc42ffa8672e7d0d0996b5fbda7f7fe699da2d))
* **database:** Just some tweaks, shouldn't notice any difference, maybe a less error in the log ([67fb992](https://github.com/tokyodrift1993/Ombi/commit/67fb9921c0c025025286eb6c0a9d09fd01b18465))
* **discord:** 🐛 Fixed an issue where the Icon in the discord notifications wouldn't apply ([32da949](https://github.com/tokyodrift1993/Ombi/commit/32da949a9547f68c57eb4338f749228b7de167c2))
* **discover:** :bug: Created new Image component to handle 429's from TMDB ([#4698](https://github.com/tokyodrift1993/Ombi/issues/4698)) and fixed [#4635](https://github.com/tokyodrift1993/Ombi/issues/4635) ([#4699](https://github.com/tokyodrift1993/Ombi/issues/4699)) ([f22d3da](https://github.com/tokyodrift1993/Ombi/commit/f22d3da765799365455b919027f7563e52b347c3))
* **discover:** :bug: Fixed the default poster not taking into account the base url in some scenarios [#4845](https://github.com/tokyodrift1993/Ombi/issues/4845) ([8eda250](https://github.com/tokyodrift1993/Ombi/commit/8eda250367953183daec03ccb5cdf9fe94275b27))
* **discover:** :children_crossing: Improved the new Genre buttons, it now includes TV results ([b087d60](https://github.com/tokyodrift1993/Ombi/commit/b087d606ff36565208e564f8856903f2a4098db5))
* **discover:** Carousel touch not working when scrolling page and recommendations and similar movie navigation ([#4633](https://github.com/tokyodrift1993/Ombi/issues/4633)) ([d5ef1d5](https://github.com/tokyodrift1993/Ombi/commit/d5ef1d53e5f77d19dba8b8059c80b538a3e14f2a))
* **discover:** Fix denied requests displayed as approved ([#4901](https://github.com/tokyodrift1993/Ombi/issues/4901)) ([1e87f20](https://github.com/tokyodrift1993/Ombi/commit/1e87f2010491b0f3fdda70d2b19d9afd94438df7))
* **discover:** Improved rendering on the discover page ([ea00d6c](https://github.com/tokyodrift1993/Ombi/commit/ea00d6c12f4441da243287d0fbc706d66c0afd82))
* **emby:** Add more logging on the PlaySync to check for Tv Shows without a valid TMDB ([08eb13b](https://github.com/tokyodrift1993/Ombi/commit/08eb13b788582d576a0e1befdb8e84ef7ff0d2f3))
* **emby:** Fix Emby played sync running a full sync during recently added sync ([#4932](https://github.com/tokyodrift1993/Ombi/issues/4932)) ([9424586](https://github.com/tokyodrift1993/Ombi/commit/9424586e9c1b622b6475aeb8ee3cf4a8f346da6e))
* Fix conflicting property name for Swagger ([#4733](https://github.com/tokyodrift1993/Ombi/issues/4733)) ([d661f32](https://github.com/tokyodrift1993/Ombi/commit/d661f32e8a9e105faab6380b4b7b642896b98163))
* Fix denied movie shown as 'processing request' in details view ([#4900](https://github.com/tokyodrift1993/Ombi/issues/4900)) ([0069bfd](https://github.com/tokyodrift1993/Ombi/commit/0069bfdf54e0785bad45c832ca052f19fd4b940b))
* Fix various styling issues ([#4935](https://github.com/tokyodrift1993/Ombi/issues/4935)) ([90b934a](https://github.com/tokyodrift1993/Ombi/commit/90b934a36996c0f489096f3641350a1c0d3b7c89))
* fixed an issue where I broke images for some users ([81ddc85](https://github.com/tokyodrift1993/Ombi/commit/81ddc8553b9094c3f6843b036daebb2eb9262e00))
* fixed build ([f877921](https://github.com/tokyodrift1993/Ombi/commit/f8779219146051ea74f8b6408658ff7975afb88b))
* fixed emails not being able to load the template ([6b49d9b](https://github.com/tokyodrift1993/Ombi/commit/6b49d9bc7108a0b663ca05de19dbf4841c9c43c1))
* fixed stats controller ([#4742](https://github.com/tokyodrift1993/Ombi/issues/4742)) ([47ea64b](https://github.com/tokyodrift1993/Ombi/commit/47ea64b5a401770f1943b575ca40f84d515e96b3))
* Fixed the issue where the login page is still present after logging in with oauth ([aca4ee3](https://github.com/tokyodrift1993/Ombi/commit/aca4ee37915a28200e5233be3dc711ccc4a5aee9))
* **Fixed the UI not applying the correct timezone settings:** :bug: ([029ea79](https://github.com/tokyodrift1993/Ombi/commit/029ea7919220fbc506898733caeb4370053051a7))
* fixed trakt image not loading when base url present ([#4711](https://github.com/tokyodrift1993/Ombi/issues/4711)) ([f102dcf](https://github.com/tokyodrift1993/Ombi/commit/f102dcf751c2eb62ebfe30f9f8e4b2ad863c3b0d))
* Fixes default image for recently requested items. ([#4767](https://github.com/tokyodrift1993/Ombi/issues/4767)) ([2e6f35f](https://github.com/tokyodrift1993/Ombi/commit/2e6f35f89abb3dd3685ec8289f8620c7ef7072cd))
* **healthchecks:** Removed redundant ping check ([1751305](https://github.com/tokyodrift1993/Ombi/commit/1751305064176d2c0135f867773ccc46b03915ec))
* **Hide music from navbar and request list when not enabled:** :bug: ([5123a76](https://github.com/tokyodrift1993/Ombi/commit/5123a76954e9f81d58c05e31afc7a29aec19cb7a))
* **images:** Retry images with a backoff when we get a Too Many requests from TheMovieDb [#4685](https://github.com/tokyodrift1993/Ombi/issues/4685) ([3f1f35d](https://github.com/tokyodrift1993/Ombi/commit/3f1f35df3164db6739691cdda8f925c296239791))
* **importer:** 🐛 Allow you to only import Plex Admins without the Plex Users ([8c9ad9b](https://github.com/tokyodrift1993/Ombi/commit/8c9ad9b414fdc6c88bdb911d6057ae5d38783b98))
* Improve Swagger documentation ([#4652](https://github.com/tokyodrift1993/Ombi/issues/4652)) ([181892b](https://github.com/tokyodrift1993/Ombi/commit/181892bcfe88e6d76febf49ef57745d04552d08e))
* **jellyfin:** Fixed an issue where the sync could stop working. Removed unused properties so the deseralization no longer fails ([0e5e0ad](https://github.com/tokyodrift1993/Ombi/commit/0e5e0adf862701d0f672beff14ec0aa75e4b5220))
* Landing and Login page improvements ([#4690](https://github.com/tokyodrift1993/Ombi/issues/4690)) ([6d423b5](https://github.com/tokyodrift1993/Ombi/commit/6d423b5447c52c5e59d8d2bd92a23b47468eb736))
* **lidarr:** Change monitor to Existing to properly add artist [#3597](https://github.com/tokyodrift1993/Ombi/issues/3597) ([506f607](https://github.com/tokyodrift1993/Ombi/commit/506f60773bf1031d0be51ccd34289b855a04ea40)), closes [/github.com/Lidarr/Lidarr/issues/3597#issuecomment-1530804055](https://github.com//github.com/Lidarr/Lidarr/issues/3597/issues/issuecomment-1530804055)
* Localize recently requested on discover page ([#4729](https://github.com/tokyodrift1993/Ombi/issues/4729)) ([bf65c76](https://github.com/tokyodrift1993/Ombi/commit/bf65c76ff9ce38f65a9e5feb872734e8d8e35eb6))
* Log Microsoft warnings to log file ([#4723](https://github.com/tokyodrift1993/Ombi/issues/4723)) ([26ac75f](https://github.com/tokyodrift1993/Ombi/commit/26ac75f0c223c2a91e3471797ae46ede3fde89cc))
* Missing Poster broken link fix ([#4637](https://github.com/tokyodrift1993/Ombi/issues/4637)) ([4070f0d](https://github.com/tokyodrift1993/Ombi/commit/4070f0d093b1c92487a1c80cabad8283a9650f51))
* More automation tests mainly around the Plex Settings page ([#4821](https://github.com/tokyodrift1993/Ombi/issues/4821)) ([21bfc5a](https://github.com/tokyodrift1993/Ombi/commit/21bfc5a45adf6da6a80854e19494a8ffdc9c0761))
* **notificaitons:** Add the RequestedByAlias field to the Notification Message ([7e9c8be](https://github.com/tokyodrift1993/Ombi/commit/7e9c8bec6b02bb4e11f8db50394e493d4dd07723))
* **notifications:** Fixed the error when sending multiple test notifications. Added more logging when Discord complains the message is invalid ([fc14780](https://github.com/tokyodrift1993/Ombi/commit/fc14780bd354483119ddcbb55a8c382e1890a783))
* **notifications:** Fixed the Partially TV notifications going to the admin [#4797](https://github.com/tokyodrift1993/Ombi/issues/4797) ([#4799](https://github.com/tokyodrift1993/Ombi/issues/4799)) ([bcb3e7f](https://github.com/tokyodrift1993/Ombi/commit/bcb3e7f00380a4c4278f59dc55febf43e6d05d47))
* Only log error messages from Microsoft ([#4787](https://github.com/tokyodrift1993/Ombi/issues/4787)) ([c614e0c](https://github.com/tokyodrift1993/Ombi/commit/c614e0ca5fe5023cbe7ced326145273cd75be85d))
* Override Sonarr V3 Profiles endpoint ([#4678](https://github.com/tokyodrift1993/Ombi/issues/4678)) ([875da95](https://github.com/tokyodrift1993/Ombi/commit/875da959f353119b05138d68ee6d32a49e14b91e))
* Partially Available prevents further TV requests ([#4768](https://github.com/tokyodrift1993/Ombi/issues/4768)) ([#4779](https://github.com/tokyodrift1993/Ombi/issues/4779)) ([031e2b9](https://github.com/tokyodrift1993/Ombi/commit/031e2b9283b239827cabaca4e35f69f2f93a4d7b))
* **plex-api:** Switch over to the new API to avoid deprecation & save… ([#4986](https://github.com/tokyodrift1993/Ombi/issues/4986)) ([2f2d35e](https://github.com/tokyodrift1993/Ombi/commit/2f2d35ec867a8e5488e368db294bd37bcf92d843))
* **plex-oauth:** 🐛 Fixed an issue where using OAuth you could log in as a Ombi Local user [#4835](https://github.com/tokyodrift1993/Ombi/issues/4835) ([4098da3](https://github.com/tokyodrift1993/Ombi/commit/4098da305aaea9dae9a552644268a4fed7204cfe))
* **plex-watchlist:** Index out of bounds error ([8cd556e](https://github.com/tokyodrift1993/Ombi/commit/8cd556e268931596b9c1d1ae0ce533bfaaf330f4))
* **plex-watchlist:** Lookup the ID from different sources when Plex doesn't contain the metadata ([#4843](https://github.com/tokyodrift1993/Ombi/issues/4843)) ([a2cc23b](https://github.com/tokyodrift1993/Ombi/commit/a2cc23b351c4a568c44e6c855f94db9f71ad084a))
* **plex:** :bug: Fixed not being able to enable watchlist requests in the Plex settings ([3e5158e](https://github.com/tokyodrift1993/Ombi/commit/3e5158ef9cda58ea2dd3be143f07aa5433691d79))
* **plex:** :bug: Fixed the issue where you couldn't add a new server on a fresh setup after the settings page rework ([187b18d](https://github.com/tokyodrift1993/Ombi/commit/187b18d5c01f6a13831e4a410b5d7c349e27d847))
* **plex:** 🐛 Fixed an issue with the Plex Sync ([ab1a11a](https://github.com/tokyodrift1993/Ombi/commit/ab1a11af78efbe9d37bd55aa80a640796c138a98))
* **plex:** Added the watchlist request whole show back into the settings ([10701c4](https://github.com/tokyodrift1993/Ombi/commit/10701c4a0b6190eebb75c5d8b18224f3d0bc8502))
* **plex:** Fixed an issue where sometimes the availability checker would throw an exception when checking episodes ([17ba202](https://github.com/tokyodrift1993/Ombi/commit/17ba2020ee0950c2c0e0e03fdb7835b579da75a9))
* **plex:** Fixed some errors around the scanner that was causing the scan to fail ([d9787dc](https://github.com/tokyodrift1993/Ombi/commit/d9787dc32aace808d196f6f87456ef45de3d7bbf))
* **plex:** stop the plex sync from deleting episodes when we can't find the plex key ([66b05e5](https://github.com/tokyodrift1993/Ombi/commit/66b05e5a85dbfe1fec5f9366e80987f2cfa1f4fe))
* **radarr-4k:** :bug: Fixed an issue where the overrides wouldn't work for 4k Requests ([0fb29a0](https://github.com/tokyodrift1993/Ombi/commit/0fb29a0b16b1fc87f71df1a589f6141324cf2f1b))
* **radarr-4k:** 🐛 Fixed an issue when using Radarr 4k with user set quality profiles. There are now user quality profiles for 4k profile [#5025](https://github.com/tokyodrift1993/Ombi/issues/5025) ([62b9a1f](https://github.com/tokyodrift1993/Ombi/commit/62b9a1f65fc4ee5f1eaf9dfabf37742a9007433e))
* **radarr-settings:** 🐛 Fixed a typo ([4a50a00](https://github.com/tokyodrift1993/Ombi/commit/4a50a00d4729d99f4359874b9af4dbc58a0c220b))
* **radarr:** :bug: Enable validation on the radarr settings page ([0af3511](https://github.com/tokyodrift1993/Ombi/commit/0af3511e819d24e0f4edf6f33931e61bba743224))
* **radarr:** Fixed an issue where the radarr sync would break ([de4baad](https://github.com/tokyodrift1993/Ombi/commit/de4baade9f87248d77106ff1a313a498870f4fb3))
* Remove Angular TSLint ([#4973](https://github.com/tokyodrift1993/Ombi/issues/4973)) ([93969b5](https://github.com/tokyodrift1993/Ombi/commit/93969b5a2d82f442299bee418fae43cb590d7743))
* Remove old trending source ([#4987](https://github.com/tokyodrift1993/Ombi/issues/4987)) ([aacaa3e](https://github.com/tokyodrift1993/Ombi/commit/aacaa3e140b43f5d196da612f785cc4451717752))
* remove sort header ([969bc7b](https://github.com/tokyodrift1993/Ombi/commit/969bc7bb25ea900ab9199509b079b36843e5bd6f))
* Reworked the version check ([#4719](https://github.com/tokyodrift1993/Ombi/issues/4719)) ([#4781](https://github.com/tokyodrift1993/Ombi/issues/4781)) ([55855c5](https://github.com/tokyodrift1993/Ombi/commit/55855c5adda3cd1c51b7fbd0c19b469fc813f98e))
* Show the ApiAlias in the requests-list ([9ff624c](https://github.com/tokyodrift1993/Ombi/commit/9ff624ce4646815b239fbb8327117947f0a90e4b))
* **sickrage:** Fixed issue with incorrect handling of SiCKRAGE episode results returned during episode status changes, now expects array of objects from data path if present ([#4648](https://github.com/tokyodrift1993/Ombi/issues/4648)) ([6d16442](https://github.com/tokyodrift1993/Ombi/commit/6d16442d4d714920367df065a3ced42b729f4233))
* Some minor tweaks to the movie info panel ([#4883](https://github.com/tokyodrift1993/Ombi/issues/4883)) ([1244487](https://github.com/tokyodrift1993/Ombi/commit/12444871df2f7602200f73971fce962f06b4a80b))
* **sonarr:** :bug: Added some more error handling and information around testing sonarr ([bd2c2d3](https://github.com/tokyodrift1993/Ombi/commit/bd2c2d3901e239393010fd582b207f1571fb4b7e)), closes [#4877](https://github.com/tokyodrift1993/Ombi/issues/4877)
* **sonarr:** :bug: Cleaned up and removed Sonarr v3 option, sonarr v3 is now the default. This allows us to get ready for the upcoming Sonarr v4 ([#4764](https://github.com/tokyodrift1993/Ombi/issues/4764)) ([2cddec7](https://github.com/tokyodrift1993/Ombi/commit/2cddec759004b6490f686ff74cb092238e3dc946))
* **sonarr:** :bug: Fixed an issue where the language list didn't correctly load for power users in the advanced options [#4782](https://github.com/tokyodrift1993/Ombi/issues/4782) ([2173670](https://github.com/tokyodrift1993/Ombi/commit/217367047d1568070dd507e54ad3fd2c68f05b88))
* **sonarr:** :bug: Improved the error handling in the sonarr settings page in the UI ([fcd78fe](https://github.com/tokyodrift1993/Ombi/commit/fcd78fee619d10ec7d78e8c8ec6c3ac4b0a361a1)), closes [#4877](https://github.com/tokyodrift1993/Ombi/issues/4877)
* **sonarr:** :bug: Sonarr V4 should work now ([#4810](https://github.com/tokyodrift1993/Ombi/issues/4810)) ([37655af](https://github.com/tokyodrift1993/Ombi/commit/37655aff9d3d133b42f5664bc9445d6571e966d6))
* **sonarr:** :bug: Stop the sonarr version endpoint from breaking when Sonarr is down [#4895](https://github.com/tokyodrift1993/Ombi/issues/4895) ([7bb8bec](https://github.com/tokyodrift1993/Ombi/commit/7bb8becfb140ef6012356752a71d53b5b404e482))
* **sonarr:** 🐛 Correctly monitor episodes ([57e7830](https://github.com/tokyodrift1993/Ombi/commit/57e7830f8e54b65ce3c1f0b122cbcc517d1af926))
* **sonarr:** V4 actually works this time around ([f62e70f](https://github.com/tokyodrift1993/Ombi/commit/f62e70fc493c7971da5e4508ce10522f5df0bbf7))
* src/Ombi.Notifications/Ombi.Notifications.csproj to reduce vulnerabilities ([#4969](https://github.com/tokyodrift1993/Ombi/issues/4969)) [skip ci] ([8584ad4](https://github.com/tokyodrift1993/Ombi/commit/8584ad46053c51f5da40b24f3efd1b9e5a031ddd))
* src/Ombi.Notifications/Ombi.Notifications.csproj to reduce vulnerabilities ([#5167](https://github.com/tokyodrift1993/Ombi/issues/5167)) ([e1f2a84](https://github.com/tokyodrift1993/Ombi/commit/e1f2a848065d79c8bba9eafff4f1f5db4a994b53))
* src/Ombi.Store/Ombi.Store.csproj to reduce vulnerabilities ([#5160](https://github.com/tokyodrift1993/Ombi/issues/5160)) ([9c21074](https://github.com/tokyodrift1993/Ombi/commit/9c2107418939ee92e50c59765481f30efac12eff))
* src/Ombi/ClientApp/package.json & src/Ombi/ClientApp/yarn.lock to reduce vulnerabilities ([#5010](https://github.com/tokyodrift1993/Ombi/issues/5010)) [skip ci] ([9c2e1b4](https://github.com/tokyodrift1993/Ombi/commit/9c2e1b435305d51cc9ab7f5d6932ccd3fa723e6c))
* src/Ombi/ClientApp/package.json & src/Ombi/ClientApp/yarn.lock to reduce vulnerabilities ([#5040](https://github.com/tokyodrift1993/Ombi/issues/5040))  [skip ci] ([955a742](https://github.com/tokyodrift1993/Ombi/commit/955a742fae1d0a3983c59cf77eb1a2d222f18b48))
* src/Ombi/ClientApp/package.json & src/Ombi/ClientApp/yarn.lock to reduce vulnerabilities ([#5072](https://github.com/tokyodrift1993/Ombi/issues/5072)) [skip ci] ([af6a986](https://github.com/tokyodrift1993/Ombi/commit/af6a9867719deb7b651a6a78352a8ce0df7a0cf0))
* src/Ombi/Ombi.csproj to reduce vulnerabilities ([#5066](https://github.com/tokyodrift1993/Ombi/issues/5066)) [skip ci] ([71df058](https://github.com/tokyodrift1993/Ombi/commit/71df05886512b8589f193a5cda0166c694438fc0))
* Support duplicates in Emby/JF collections ([#4902](https://github.com/tokyodrift1993/Ombi/issues/4902)) ([141f96d](https://github.com/tokyodrift1993/Ombi/commit/141f96da5e45d5b3fa5f496806b102e473da6607))
* switch back to the old plex friends API [#4989](https://github.com/tokyodrift1993/Ombi/issues/4989) ([c8ad12e](https://github.com/tokyodrift1993/Ombi/commit/c8ad12eb5f53889609d1793ae907afd33ba6ef38))
* **sync:** Emby+Jellyfin - sync multi-episode files of 3+ episodes ([bd8fd89](https://github.com/tokyodrift1993/Ombi/commit/bd8fd890554c9d85d6da4d2cee813e82ce698e52))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([#4713](https://github.com/tokyodrift1993/Ombi/issues/4713)) ([ff142b0](https://github.com/tokyodrift1993/Ombi/commit/ff142b09abbb2f9540387284222552e6e12639fe))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([#4801](https://github.com/tokyodrift1993/Ombi/issues/4801)) ([4692003](https://github.com/tokyodrift1993/Ombi/commit/46920032baed04675b2ffbe1700afdc0740a4ac4))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([#4926](https://github.com/tokyodrift1993/Ombi/issues/4926)) ([151efe1](https://github.com/tokyodrift1993/Ombi/commit/151efe19d0012b85f317c175da5ab4802ea14e20))
* Unable to Delete Jellyfin Server ([#4705](https://github.com/tokyodrift1993/Ombi/issues/4705)) ([#4780](https://github.com/tokyodrift1993/Ombi/issues/4780)) ([76a0d0d](https://github.com/tokyodrift1993/Ombi/commit/76a0d0d26893bd480fea4735f77522ac6261a425))
* upgrade @fortawesome/fontawesome-free from 6.1.2 to 6.4.0 ([#4965](https://github.com/tokyodrift1993/Ombi/issues/4965)) [skip ci] ([84454e5](https://github.com/tokyodrift1993/Ombi/commit/84454e53c00c808e8a393c7750bdc418a7593e91))
* upgrade @fortawesome/fontawesome-free from 6.4.0 to 6.4.2 ([#5005](https://github.com/tokyodrift1993/Ombi/issues/5005)) [skip ci] ([f703ff2](https://github.com/tokyodrift1993/Ombi/commit/f703ff255cf389a60bdece824214d38f57f03f90))
* upgrade @fortawesome/fontawesome-free from 6.4.2 to 6.5.0 ([#5053](https://github.com/tokyodrift1993/Ombi/issues/5053))  [skip ci] ([5017e38](https://github.com/tokyodrift1993/Ombi/commit/5017e38f87e32821adb744935fffcb2d76927e2c))
* upgrade @microsoft/signalr from 6.0.11 to 6.0.16 ([#4964](https://github.com/tokyodrift1993/Ombi/issues/4964)) [skip ci] ([a0201e3](https://github.com/tokyodrift1993/Ombi/commit/a0201e3f585dc52f717e33c46ede35a4eccac736))
* upgrade @microsoft/signalr from 6.0.18 to 6.0.20 ([#4999](https://github.com/tokyodrift1993/Ombi/issues/4999)) [skip ci] ([563a044](https://github.com/tokyodrift1993/Ombi/commit/563a0443ea09ff71c5aa740173b4f3c5627cb543))
* upgrade @microsoft/signalr from 6.0.21 to 6.0.22 ([#5020](https://github.com/tokyodrift1993/Ombi/issues/5020)) ([1261a44](https://github.com/tokyodrift1993/Ombi/commit/1261a446e7ffa4d7540623f76ecc9d7e643ca4ce))
* upgrade @microsoft/signalr from 6.0.22 to 6.0.23 ([#5032](https://github.com/tokyodrift1993/Ombi/issues/5032)) [skip ci] ([11edac9](https://github.com/tokyodrift1993/Ombi/commit/11edac961b0b828658be83a9c4e67079345d3b0b))
* upgrade @types/jquery from 3.5.16 to 3.5.17 ([#5011](https://github.com/tokyodrift1993/Ombi/issues/5011)) [skip ci] ([40ee175](https://github.com/tokyodrift1993/Ombi/commit/40ee175ccd6e53b1254833163954b6a1be0d5251))
* upgrade @types/jquery from 3.5.18 to 3.5.19 ([#5022](https://github.com/tokyodrift1993/Ombi/issues/5022)) ([291425e](https://github.com/tokyodrift1993/Ombi/commit/291425e6091d90ac07010ff65cc3a53309965546))
* upgrade @types/jquery from 3.5.22 to 3.5.23 ([#5034](https://github.com/tokyodrift1993/Ombi/issues/5034)) [skip ci] ([9e28879](https://github.com/tokyodrift1993/Ombi/commit/9e28879fc1a479e1bd77ca003e3e748fec27f081))
* upgrade @types/jquery from 3.5.27 to 3.5.28 ([#5049](https://github.com/tokyodrift1993/Ombi/issues/5049))  [skip ci] ([2c8fe80](https://github.com/tokyodrift1993/Ombi/commit/2c8fe8087aea227e7425e82392ad9ccb3f8261b4))
* upgrade cypress-real-events from 1.10.0 to 1.10.1 ([#5014](https://github.com/tokyodrift1993/Ombi/issues/5014)) ([ed06c22](https://github.com/tokyodrift1993/Ombi/commit/ed06c22fb26fb605b857f3f8e1b26b2dbab15710))
* upgrade cypress-real-events from 1.7.4 to 1.8.1 ([#4968](https://github.com/tokyodrift1993/Ombi/issues/4968)) [skip ci] ([8a24b56](https://github.com/tokyodrift1993/Ombi/commit/8a24b56299c3bc98bf0d719ba448972aaa7f7461))
* upgrade cypress-real-events from 1.8.1 to 1.9.1 ([#5000](https://github.com/tokyodrift1993/Ombi/issues/5000)) [skip ci] ([19e0a88](https://github.com/tokyodrift1993/Ombi/commit/19e0a886ced344bfe6284f3916fba12826b7de08))
* upgrade jquery from 3.6.1 to 3.7.0 ([#4974](https://github.com/tokyodrift1993/Ombi/issues/4974)) ([f2552ef](https://github.com/tokyodrift1993/Ombi/commit/f2552ef6ede011080a8d5499e11930c4d41d04c2))
* upgrade jquery from 3.7.0 to 3.7.1 ([#5015](https://github.com/tokyodrift1993/Ombi/issues/5015)) ([7bc915c](https://github.com/tokyodrift1993/Ombi/commit/7bc915cc14ed27ad0f35142279f9362e5b7b27b8))
* upgrade moment from 2.29.4 to 2.30.1 ([#5075](https://github.com/tokyodrift1993/Ombi/issues/5075)) [skip ci] ([460fa39](https://github.com/tokyodrift1993/Ombi/commit/460fa39bb95c73bafcd65fcc394fecca04d3ac49))
* upgrade multiple dependencies with Snyk ([#4961](https://github.com/tokyodrift1993/Ombi/issues/4961)) ([3c3edf6](https://github.com/tokyodrift1993/Ombi/commit/3c3edf6273fa98c420989ebcebfee52b2545e402))
* upgrade multiple dependencies with Snyk ([#4963](https://github.com/tokyodrift1993/Ombi/issues/4963)) [skip ci] ([6025c5e](https://github.com/tokyodrift1993/Ombi/commit/6025c5ed757438d3a5d79bd36fd789ef0297ce70))
* upgrade multiple dependencies with Snyk ([#5030](https://github.com/tokyodrift1993/Ombi/issues/5030)) ([7e1e254](https://github.com/tokyodrift1993/Ombi/commit/7e1e254cfe6c84c1f143388f436d63efd4686e55))
* upgrade multiple dependencies with Snyk ([#5073](https://github.com/tokyodrift1993/Ombi/issues/5073)) [skip ci] ([a27b459](https://github.com/tokyodrift1993/Ombi/commit/a27b4592471c58fca9ad5193b979171fa7c5e66d))
* upgrade multiple dependencies with Snyk ([#5104](https://github.com/tokyodrift1993/Ombi/issues/5104)) [skip ci] ([a1083f6](https://github.com/tokyodrift1993/Ombi/commit/a1083f67c73c968b9ff0a0feebe5a9aac6a7c7c9))
* upgrade primeng from 15.0.0-rc.1 to 15.4.1 ([#4962](https://github.com/tokyodrift1993/Ombi/issues/4962)) [skip ci] ([23a4fed](https://github.com/tokyodrift1993/Ombi/commit/23a4fede69898a25b342aed78a8cda553c1fd18d))
* upgrade zone.js from 0.11.8 to 0.13.0 ([#4975](https://github.com/tokyodrift1993/Ombi/issues/4975)) ([37f6564](https://github.com/tokyodrift1993/Ombi/commit/37f65648a2f8742020b0954acec4168aee048942))
* upgrade zone.js from 0.13.1 to 0.13.2 ([#5019](https://github.com/tokyodrift1993/Ombi/issues/5019)) ([c5c8dda](https://github.com/tokyodrift1993/Ombi/commit/c5c8dda7e4f744fa47841efba9f0e8fee9ef67c6))
* **user-importer:** Do not delete the Plex Admin as part of the user Importer cleanup [#4870](https://github.com/tokyodrift1993/Ombi/issues/4870) ([#4981](https://github.com/tokyodrift1993/Ombi/issues/4981)) ([4e80e7b](https://github.com/tokyodrift1993/Ombi/commit/4e80e7b7c3239a46a645ab6d1054993734ad4dd6))
* **user-importer:** don't delete admins in the cleanup ([895b9bf](https://github.com/tokyodrift1993/Ombi/commit/895b9bf6a060a678d4b0cca8083aa96c38e47b95))
* **user-importer:** Fixed not importing all correct users [#4989](https://github.com/tokyodrift1993/Ombi/issues/4989) ([34c32f8](https://github.com/tokyodrift1993/Ombi/commit/34c32f8338705ea3f790d95b91c9ada21a41b9f2))
* **webhook:** Remove added trailing slash from webhook URL [#4710](https://github.com/tokyodrift1993/Ombi/issues/4710) ([369eb33](https://github.com/tokyodrift1993/Ombi/commit/369eb339171671101be219486e2aab27a20f3d74))
* **wizard:** :bug: Stop access to the wizard when you have already setup ombi ([#4866](https://github.com/tokyodrift1993/Ombi/issues/4866)) ([353de98](https://github.com/tokyodrift1993/Ombi/commit/353de981a462e1753288d225ec4644a44a62d2bc))


### Features

* ✨ Recently Requested on Discover Page ([#4387](https://github.com/tokyodrift1993/Ombi/issues/4387)) ([44d38fb](https://github.com/tokyodrift1993/Ombi/commit/44d38fbaae521dbb467b61c7471b2384015ac52e))
* Add Auto Approve 4K role ([#4982](https://github.com/tokyodrift1993/Ombi/issues/4982)) ([#4983](https://github.com/tokyodrift1993/Ombi/issues/4983)) ([ac05495](https://github.com/tokyodrift1993/Ombi/commit/ac054954254b9d77a42e057f1065570c7fdc1093)), closes [#4957](https://github.com/tokyodrift1993/Ombi/issues/4957)
* add crew on movie page ([#4722](https://github.com/tokyodrift1993/Ombi/issues/4722)) ([1d53261](https://github.com/tokyodrift1993/Ombi/commit/1d532613823804b25984bd1d223d081a54ad143d))
* Add the option for header authentication to create users ([#4841](https://github.com/tokyodrift1993/Ombi/issues/4841)) ([e6c9ce5](https://github.com/tokyodrift1993/Ombi/commit/e6c9ce5ad0056608ecda8273fb8124ed292e2942))
* Adding postgres support to ombi (beta) ([#5050](https://github.com/tokyodrift1993/Ombi/issues/5050)) ([f8c6102](https://github.com/tokyodrift1993/Ombi/commit/f8c61027bf53d657d7955a98b69d7ab90b66a75a))
* Angular 15 and Dependency upgrades ([#4818](https://github.com/tokyodrift1993/Ombi/issues/4818)) ([4816acf](https://github.com/tokyodrift1993/Ombi/commit/4816acf6f94443d23ebef6091d4cfcbca580f9ca))
* **discover:** ✨ Added infinite scroll on advanced search results ([898bc89](https://github.com/tokyodrift1993/Ombi/commit/898bc89fa78245c1f3de9481f6c724f087a16e39))
* **discover:** Add deny option to recently requested ([#4907](https://github.com/tokyodrift1993/Ombi/issues/4907)) ([78f340e](https://github.com/tokyodrift1993/Ombi/commit/78f340ee5f309c55690497170897533801957668))
* **emby:** Show end-user external IP address to Emby when logging in as an Emby user ([#4949](https://github.com/tokyodrift1993/Ombi/issues/4949)) ([79cef7e](https://github.com/tokyodrift1993/Ombi/commit/79cef7e0f8643e36536a9ea84dd1a07c232403a9)), closes [#4947](https://github.com/tokyodrift1993/Ombi/issues/4947)
* **emby:** Show watched status for Movie requests ([9cfb10b](https://github.com/tokyodrift1993/Ombi/commit/9cfb10bb1ee69067a6f47bd2c8a72d4e6834350e))
* **emby:** Show watched status for TV requests ([1f37de0](https://github.com/tokyodrift1993/Ombi/commit/1f37de08888812b6d130d92bb664a89e89149105))
* Hide watched status when request is not available ([#4934](https://github.com/tokyodrift1993/Ombi/issues/4934)) ([82c7f1c](https://github.com/tokyodrift1993/Ombi/commit/82c7f1c44fd7c87d57cc2b0c34a10fcda7628f4e))
* **notifications:** Add more curly variables for partially available notification ([66aa101](https://github.com/tokyodrift1993/Ombi/commit/66aa101019c4c4b34e186db9d303049d02b9c781))
* **plex:** ✨ Added the ability to configure the watchlist to request the whole TV show rather than latest season ([#4774](https://github.com/tokyodrift1993/Ombi/issues/4774)) ([fa65712](https://github.com/tokyodrift1993/Ombi/commit/fa65712bd570fe8d5d21b8ca0abe182b84960017))
* **plex:** Rework the Plex Settings page ([#4805](https://github.com/tokyodrift1993/Ombi/issues/4805)) ([1b8c47f](https://github.com/tokyodrift1993/Ombi/commit/1b8c47f3163f618851d4904732cb07015e1e93ff))
* Provide a flag for missing users on Plex Server ([#4688](https://github.com/tokyodrift1993/Ombi/issues/4688)) ([#4778](https://github.com/tokyodrift1993/Ombi/issues/4778)) ([b4a14c2](https://github.com/tokyodrift1993/Ombi/commit/b4a14c2d28218409390e517b226130e3e84efee1))
* Radarr tags ([#4815](https://github.com/tokyodrift1993/Ombi/issues/4815)) ([6fa5064](https://github.com/tokyodrift1993/Ombi/commit/6fa506491fe867cdeef9df79991ae49319d71c3d))
* Recently requested improvements ([#4755](https://github.com/tokyodrift1993/Ombi/issues/4755)) ([ff04d87](https://github.com/tokyodrift1993/Ombi/commit/ff04d875343604c77c391bf55d0968977e480281))
* Search by genre ([1837419](https://github.com/tokyodrift1993/Ombi/commit/18374198f9f2462ba85c5781b0fcc05892728b21))
* **sonarr:** :sparkles: Add the username to a Sonarr tag when sent to Sonarr ([#4802](https://github.com/tokyodrift1993/Ombi/issues/4802)) ([1d5fabd](https://github.com/tokyodrift1993/Ombi/commit/1d5fabd317e3ce8f6dd31f06d15dc81277f39dbd))
* **sonarr:** Added the ability to add default tags when sending to Sonarr ([#4803](https://github.com/tokyodrift1993/Ombi/issues/4803)) ([ecfbb8e](https://github.com/tokyodrift1993/Ombi/commit/ecfbb8eda91e1a90239dcf8be847afcc2394a78e))
* upgrade @ngx-translate/core from 14.0.0 to 15.0.0 ([#5158](https://github.com/tokyodrift1993/Ombi/issues/5158)) ([48d3dec](https://github.com/tokyodrift1993/Ombi/commit/48d3dec26d36002a9d613432fb7f9232d8801cba))
* upgrade @ngx-translate/http-loader from 7.0.0 to 8.0.0 ([#5159](https://github.com/tokyodrift1993/Ombi/issues/5159)) ([3bd98c1](https://github.com/tokyodrift1993/Ombi/commit/3bd98c1d711786bff66f1528dcdddcafe256abd2))
* Upgrade to Angular14 ([#4668](https://github.com/tokyodrift1993/Ombi/issues/4668)) ([b9d55a4](https://github.com/tokyodrift1993/Ombi/commit/b9d55a469b412558cbf67c1e25db7fdda5964cd8))
* Watchlist history errors([#4741](https://github.com/tokyodrift1993/Ombi/issues/4741)) ([c222f1a](https://github.com/tokyodrift1993/Ombi/commit/c222f1a945e944ef34e68cad2b61f40e57cab823))


### Performance Improvements

* ⚡ Improve render performance on the discover, movie and tv pages ([#5084](https://github.com/tokyodrift1993/Ombi/issues/5084)) ([71c86a8](https://github.com/tokyodrift1993/Ombi/commit/71c86a8db9e63bf0ab779f9a8b5d62a42c246392))
* stop populating obsolete subscribe fields ([#4625](https://github.com/tokyodrift1993/Ombi/issues/4625)) ([9a73463](https://github.com/tokyodrift1993/Ombi/commit/9a734637665f671b17c2bb440d93b35a891c142b))



# [4.20.0](https://github.com/tokyodrift1993/Ombi/compare/v4.19.1...v4.20.0) (2022-04-28)


### Features

* **discover:** Show more relevant shows in upcoming TV ([8357819](https://github.com/tokyodrift1993/Ombi/commit/8357819b53b8c675c0b246d7006b5a778bdba33f))



## [4.19.1](https://github.com/tokyodrift1993/Ombi/compare/v4.19.0...v4.19.1) (2022-04-27)



# [4.19.0](https://github.com/tokyodrift1993/Ombi/compare/v4.18.0...v4.19.0) (2022-04-27)


### Features

* **sync:** Detect reidentified movies in Emby and Jellyfin ([5938077](https://github.com/tokyodrift1993/Ombi/commit/5938077d82a5357f79c07b218b3986557a5816e8))
* **sync:** Detect reidentified series in Emby and Jellyfin ([9096e91](https://github.com/tokyodrift1993/Ombi/commit/9096e91d55d268819bce22831f8a8b27f2a1776b))



# [4.18.0](https://github.com/tokyodrift1993/Ombi/compare/v4.17.0...v4.18.0) (2022-04-26)


### Bug Fixes

* **discover:** Fix cache mix up ([03d9422](https://github.com/tokyodrift1993/Ombi/commit/03d94220c7eaafb50c6c80a6ed1150794b873ac3))
* **discover:** Fix new trending feature detection ([6794b88](https://github.com/tokyodrift1993/Ombi/commit/6794b887f6544fb41528bdd9728b7824b65e47ee))
* **settings:** Allow toggling features when there are more than one ([a373359](https://github.com/tokyodrift1993/Ombi/commit/a373359ae8e6bad42b558a6e01a8ff2840d3bbaa))


### Features

* **discover:** Add new trending source experimental feature ([1a0823c](https://github.com/tokyodrift1993/Ombi/commit/1a0823ca80559417c67323aaeaa1ef5243e98031))
* **discover:** Default trending source to new logic ([4f12939](https://github.com/tokyodrift1993/Ombi/commit/4f12939e22020a67a5ee75e2907923faea136e8d))



# [4.17.0](https://github.com/tokyodrift1993/Ombi/compare/v4.16.17...v4.17.0) (2022-04-25)


### Features

* **discover:** Add original language filter ([ef7ec86](https://github.com/tokyodrift1993/Ombi/commit/ef7ec861d8aede2a4817752c990617f583805391))



## [4.16.17](https://github.com/tokyodrift1993/Ombi/compare/v4.16.16...v4.16.17) (2022-04-25)



## [4.16.16](https://github.com/tokyodrift1993/Ombi/compare/v4.16.15...v4.16.16) (2022-04-25)


### Bug Fixes

* **4616:** :bug: fixed mandatory fields ([d8f2260](https://github.com/tokyodrift1993/Ombi/commit/d8f2260c7ae3ed48386743b7adbd06e284487034))



## [4.16.15](https://github.com/tokyodrift1993/Ombi/compare/v4.16.14...v4.16.15) (2022-04-24)



## [4.16.14](https://github.com/tokyodrift1993/Ombi/compare/v4.16.13...v4.16.14) (2022-04-19)



## [4.16.13](https://github.com/tokyodrift1993/Ombi/compare/v4.16.12...v4.16.13) (2022-04-19)



## [4.16.12](https://github.com/tokyodrift1993/Ombi/compare/v4.16.11...v4.16.12) (2022-04-19)



## [4.16.11](https://github.com/tokyodrift1993/Ombi/compare/v4.16.10...v4.16.11) (2022-04-14)


### Bug Fixes

* Set the default job for the watchlist import to hourly instead of daily ([75906af](https://github.com/tokyodrift1993/Ombi/commit/75906af0adee3e3c68d825c3aaa8f7b918461b1f))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([0e8a64b](https://github.com/tokyodrift1993/Ombi/commit/0e8a64b8ca00d210fbe843ac2c3f6af218d80cbc))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([7b0ad61](https://github.com/tokyodrift1993/Ombi/commit/7b0ad61bfcff3986b33180dc64022cba7ea8eefb))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([4fc2c1f](https://github.com/tokyodrift1993/Ombi/commit/4fc2c1f24534085a783a3d5791f5533b68272153))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([76ab733](https://github.com/tokyodrift1993/Ombi/commit/76ab733b91791e4d93d184f3c7d0779c6a388695))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([06e4cef](https://github.com/tokyodrift1993/Ombi/commit/06e4cefa7b4e55b860da9a64f461f6ec8fa17367))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([c12d89d](https://github.com/tokyodrift1993/Ombi/commit/c12d89d6781a337520977ad285f8d08c93f434dd))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([bc0c2f6](https://github.com/tokyodrift1993/Ombi/commit/bc0c2f622e34fb5a2711039d9ed7aad34f982b15))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([e4b00e6](https://github.com/tokyodrift1993/Ombi/commit/e4b00e6b3468bd9389eeb02fc6ad7daf27abc3b3))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([d1998d3](https://github.com/tokyodrift1993/Ombi/commit/d1998d326f999a38586d0a351a20c5448df95842))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([bee4ccb](https://github.com/tokyodrift1993/Ombi/commit/bee4ccb804594e7385b1fbdc9fe2ef5c42e0d21f))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([80233ed](https://github.com/tokyodrift1993/Ombi/commit/80233ed560cc976e83570d0655c3472f20171fb3))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([8a78adc](https://github.com/tokyodrift1993/Ombi/commit/8a78adc9bb62f277f2b213dcb3847ed6d0089fcb))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([d04c60a](https://github.com/tokyodrift1993/Ombi/commit/d04c60aa5909b47ba6bffa6f66b03079cbd43521))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([92a785e](https://github.com/tokyodrift1993/Ombi/commit/92a785e736fa4b72a45270da2d0f4661df433078))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([634982d](https://github.com/tokyodrift1993/Ombi/commit/634982df2661cefab5ea9f5163fe04a005cc0171))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([b404baa](https://github.com/tokyodrift1993/Ombi/commit/b404baad6d0aeaa1561701e0db8db4e78613a364))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([d14f11e](https://github.com/tokyodrift1993/Ombi/commit/d14f11e0eb20ab0a68e765ee77968b3b3e54e995))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([7cf64f9](https://github.com/tokyodrift1993/Ombi/commit/7cf64f909d78908edaabeffb8a39a7d02e73fe7e))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([0c9e1ec](https://github.com/tokyodrift1993/Ombi/commit/0c9e1ec090827080cc8f7393e5e91456ff37d691))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([3b0b730](https://github.com/tokyodrift1993/Ombi/commit/3b0b730cb02efe24f6d4026e5fdb20d37e495119))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([6ed1a03](https://github.com/tokyodrift1993/Ombi/commit/6ed1a03b7ff4077f09ea9e13394b18b0d138f4c3))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([2941acd](https://github.com/tokyodrift1993/Ombi/commit/2941acd3b2ec74a5e6aeea275ab5a39d2653f37f))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([c075a1a](https://github.com/tokyodrift1993/Ombi/commit/c075a1a66784d975eaf60f2dfbbcbe048f2f63d7))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([76bd81c](https://github.com/tokyodrift1993/Ombi/commit/76bd81c3ca55a98c6ec944a838dc01294a6193a6))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([0d38275](https://github.com/tokyodrift1993/Ombi/commit/0d3827507e002bcf58f673e97ffcc3bd25dcf337))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([5c99601](https://github.com/tokyodrift1993/Ombi/commit/5c99601b07aec1a65d0186a4c4327440811e64c6))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([01546a0](https://github.com/tokyodrift1993/Ombi/commit/01546a0f7f86379528b486463246ef9bdfb9033e))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([d7fea78](https://github.com/tokyodrift1993/Ombi/commit/d7fea7843aaaab7ddff8dc31ca6d2a9117471dcc))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([1a6b95d](https://github.com/tokyodrift1993/Ombi/commit/1a6b95d45c220310213b8d811272a63f0f6ff42b))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([fa10174](https://github.com/tokyodrift1993/Ombi/commit/fa1017422c4efd4b0897871bd3c671151774d7c3))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([0c31e62](https://github.com/tokyodrift1993/Ombi/commit/0c31e628df376aac6d56ae67c7c705a9a4a7c080))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([6399643](https://github.com/tokyodrift1993/Ombi/commit/63996437a02fe10ffae6822ffa15369bec0a6b36))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([5826e2d](https://github.com/tokyodrift1993/Ombi/commit/5826e2d9a1c3f1210a87fa270dc0c81bac32944a))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([d434514](https://github.com/tokyodrift1993/Ombi/commit/d43451405be489254d7cdc7755d5f516a1e495a5))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([0b9596d](https://github.com/tokyodrift1993/Ombi/commit/0b9596d807178f5e071113ec0347868ec7f0960b))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([8c4c0b2](https://github.com/tokyodrift1993/Ombi/commit/8c4c0b262978c1303767af360d802c4b4c2b4d24))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([289ab77](https://github.com/tokyodrift1993/Ombi/commit/289ab77b0e04aae235b6f6cebc86e0a8d1f0cf2b))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([30e3417](https://github.com/tokyodrift1993/Ombi/commit/30e3417285a4eed18d429d7776f0e74096e834c0))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([6c0a5da](https://github.com/tokyodrift1993/Ombi/commit/6c0a5dadd4b8f37760252eb0fe7f88908f55506d))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([d5bf969](https://github.com/tokyodrift1993/Ombi/commit/d5bf9692ce1fc0ccfe7beca6dd200c78be177bdc))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([8a9e7ea](https://github.com/tokyodrift1993/Ombi/commit/8a9e7ea588aefbcd73ed82625887e3614e1703ea))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([01047a3](https://github.com/tokyodrift1993/Ombi/commit/01047a3fd67153f3ff16f860d2c7b50213e8d9b2))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([698a23f](https://github.com/tokyodrift1993/Ombi/commit/698a23fb83f323cdd1dd57cb49803079d44214a7))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([24eb842](https://github.com/tokyodrift1993/Ombi/commit/24eb842fc4424f7bcc3ec2949d7f5472492e96f6))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([ac8b16a](https://github.com/tokyodrift1993/Ombi/commit/ac8b16a3051ad71dbd54a8973c7dd847b564a515))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([f428ce6](https://github.com/tokyodrift1993/Ombi/commit/f428ce6a700c081437703839bc84d2f2b1138bcc))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([94b16df](https://github.com/tokyodrift1993/Ombi/commit/94b16dfe09bf1d2cd6286777d74eb5d4496abbbb))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([4881775](https://github.com/tokyodrift1993/Ombi/commit/4881775eda69a8f136ce0d8fbbf970e3d0406dc9))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([8297db9](https://github.com/tokyodrift1993/Ombi/commit/8297db91e85da308bde6fb09ad78347dee063630))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([d1152ab](https://github.com/tokyodrift1993/Ombi/commit/d1152ab7674243daa528c524c0cdc87d81ad49c9))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([eb2788b](https://github.com/tokyodrift1993/Ombi/commit/eb2788b761b55c487a59a049427ca08f6c10e836))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([21a794c](https://github.com/tokyodrift1993/Ombi/commit/21a794cbc0a5fa735ca0347c8f7f1ac04a487fbc))



## [4.10.2](https://github.com/tokyodrift1993/Ombi/compare/v4.10.1...v4.10.2) (2022-01-22)



## [4.16.10](https://github.com/tokyodrift1993/Ombi/compare/v4.16.9...v4.16.10) (2022-04-13)



## [4.16.9](https://github.com/tokyodrift1993/Ombi/compare/v4.16.8...v4.16.9) (2022-04-13)


### Bug Fixes

* **plex-watchlist:** Only request the latest season when importing from the watchlist ([77a47ff](https://github.com/tokyodrift1993/Ombi/commit/77a47ff157c6c5feafe3f2a29a3fcba8df4fdfef))



## [4.16.8](https://github.com/tokyodrift1993/Ombi/compare/v4.16.7...v4.16.8) (2022-04-13)


### Bug Fixes

* **availability:** Fixed an issue where we wouldn't mark a available 4k movie as available (when 4K request feature is disabled) ([b492699](https://github.com/tokyodrift1993/Ombi/commit/b49269961d4830a530e3054976a47f519524948b))



## [4.16.7](https://github.com/tokyodrift1993/Ombi/compare/v4.16.6...v4.16.7) (2022-04-12)



## [4.16.6](https://github.com/tokyodrift1993/Ombi/compare/v4.16.5...v4.16.6) (2022-04-11)



## [4.16.5](https://github.com/tokyodrift1993/Ombi/compare/v4.16.4...v4.16.5) (2022-04-08)


### Bug Fixes

* **watchlist:** actually fixed it this time... ([d962a32](https://github.com/tokyodrift1993/Ombi/commit/d962a3211eca29520662ddce962676e3aea17ec5))



## [4.16.4](https://github.com/tokyodrift1993/Ombi/compare/v4.16.3...v4.16.4) (2022-04-08)



## [4.16.3](https://github.com/tokyodrift1993/Ombi/compare/v4.16.2...v4.16.3) (2022-04-08)


### Bug Fixes

* **plex-watchlist:** :bug: Fixed the issue where the watchlist didn't work for users logging in via OAuth ([6398f6a](https://github.com/tokyodrift1993/Ombi/commit/6398f6a4f7755281ebeac537e3ff623df5cfa0f3))



## [4.16.2](https://github.com/tokyodrift1993/Ombi/compare/v4.16.1...v4.16.2) (2022-04-07)


### Bug Fixes

* **wizard:** Fixed an issue when using Plex OAuth it could fail setting up ([b743cf4](https://github.com/tokyodrift1993/Ombi/commit/b743cf4fafa7341ad1b163276f006d7ab0e9dcff))



## [4.16.1](https://github.com/tokyodrift1993/Ombi/compare/v4.16.0...v4.16.1) (2022-04-07)



# [4.16.0](https://github.com/tokyodrift1993/Ombi/compare/v4.15.6...v4.16.0) (2022-04-07)



## [4.15.6](https://github.com/tokyodrift1993/Ombi/compare/v4.15.5...v4.15.6) (2022-04-07)


### Bug Fixes

* **radarr:** Fixed an issue where we couldn't sync radarr content [#4577](https://github.com/tokyodrift1993/Ombi/issues/4577) ([a5355a3](https://github.com/tokyodrift1993/Ombi/commit/a5355a3023e6900c4dd1b0da4722d7596c03907f))



## [4.15.5](https://github.com/tokyodrift1993/Ombi/compare/v4.15.4...v4.15.5) (2022-04-06)



## [4.15.4](https://github.com/tokyodrift1993/Ombi/compare/v4.15.3...v4.15.4) (2022-03-29)



## [4.15.3](https://github.com/tokyodrift1993/Ombi/compare/v4.15.2...v4.15.3) (2022-03-24)



## [4.15.2](https://github.com/tokyodrift1993/Ombi/compare/v4.15.1...v4.15.2) (2022-03-23)


### Bug Fixes

* **metadata:** improved the metadata job to also lookup the media in Plex to see if it has any more uptodate metadata ([83d1a15](https://github.com/tokyodrift1993/Ombi/commit/83d1a15cc9d0ee91be73bd91c4672cf1bcf2728a))



## [4.15.1](https://github.com/tokyodrift1993/Ombi/compare/v4.15.0...v4.15.1) (2022-03-18)


### Bug Fixes

* **mediaserver:** fixed an issue where we were not detecting available content correctly [#4542](https://github.com/tokyodrift1993/Ombi/issues/4542) ([9cdd6f4](https://github.com/tokyodrift1993/Ombi/commit/9cdd6f41cdab8825a984905c089611409c53c753))



# [4.15.0](https://github.com/tokyodrift1993/Ombi/compare/v4.14.4...v4.15.0) (2022-03-17)


### Bug Fixes

* **jellyfin:** :bug: Fixed an issue where Jellyfin content was showing the Play on Emby button ([18b167d](https://github.com/tokyodrift1993/Ombi/commit/18b167d16a3d682b5060ee36dedbbb069bef09de)), closes [#4542](https://github.com/tokyodrift1993/Ombi/issues/4542)



## [4.14.4](https://github.com/tokyodrift1993/Ombi/compare/v4.14.3...v4.14.4) (2022-03-10)


### Bug Fixes

* :bug: Fixed the Request On Behalf autocomplete not filtering correctly ([a8ba2f3](https://github.com/tokyodrift1993/Ombi/commit/a8ba2f3544a1c01c57f217c4036a277ab0e67a09)), closes [#4539](https://github.com/tokyodrift1993/Ombi/issues/4539)
* **translations:** 🌐 New translations from Crowdin [skip ci] ([356c742](https://github.com/tokyodrift1993/Ombi/commit/356c7424e0ce8c1c5063b04bc6ed9b809f214d65))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([6fcaecf](https://github.com/tokyodrift1993/Ombi/commit/6fcaecf80b766f2d43ac7082d74364238e1638b7))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([132f4d4](https://github.com/tokyodrift1993/Ombi/commit/132f4d4e609b7fb7e37f38ee2f395926e2911abe))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([f292006](https://github.com/tokyodrift1993/Ombi/commit/f292006a08894a8d0ba899c8c6e9fe863e558dda))



## [4.14.3](https://github.com/tokyodrift1993/Ombi/compare/v4.14.2...v4.14.3) (2022-03-06)


### Bug Fixes

* **availability:** :bug: Fixed an issue where with 4k content, we could repeat notifications ([f9ebc1c](https://github.com/tokyodrift1993/Ombi/commit/f9ebc1cc2e13c7cd335121cd86295b10eda529ba))



## [4.14.2](https://github.com/tokyodrift1993/Ombi/compare/v4.14.1...v4.14.2) (2022-03-05)


### Bug Fixes

* **Sonarr:** :bug: Fixed an issue where some seasons were not being monitored correctly in sonarr ([60cfd41](https://github.com/tokyodrift1993/Ombi/commit/60cfd41f68e9006555c1a419dcff1aaa24b3e09f)), closes [#4506](https://github.com/tokyodrift1993/Ombi/issues/4506)



## [4.14.1](https://github.com/tokyodrift1993/Ombi/compare/v4.14.0...v4.14.1) (2022-03-03)



# [4.14.0](https://github.com/tokyodrift1993/Ombi/compare/v4.13.2...v4.14.0) (2022-03-02)



## [4.13.2](https://github.com/tokyodrift1993/Ombi/compare/v4.13.1...v4.13.2) (2022-03-01)


### Bug Fixes

* **requests:** :bug: Fixed an issue where you couldn't approve movies from the request list ([1611ef9](https://github.com/tokyodrift1993/Ombi/commit/1611ef9198befbb7a4db50a4f0953e50f29a788f))



## [4.13.1](https://github.com/tokyodrift1993/Ombi/compare/v4.13.0...v4.13.1) (2022-03-01)


### Bug Fixes

* **details:** :bug: Fixed the missing Play on Media server button for 4k content [#4529](https://github.com/tokyodrift1993/Ombi/issues/4529) ([68600f3](https://github.com/tokyodrift1993/Ombi/commit/68600f3b45376e12dd2ef263d81ca4040c84cbca))
* **discover:** :bug: Fixed the issue where there was an option on the discover to request 4k shows (that's not supported currently) ([dcfd688](https://github.com/tokyodrift1993/Ombi/commit/dcfd688c8d2337e55fa9c6c33b7c3e80fc560cda))
* **requests:** :bug: Fixed the issue where we could no longer approve TV Requests from the requests list ([19fe4e3](https://github.com/tokyodrift1993/Ombi/commit/19fe4e342efe5578c26ab8ba7ee2f2e64bbc9418))
* **translations:** 🌐 New translations from Crowdin [skip ci] ([#4526](https://github.com/tokyodrift1993/Ombi/issues/4526)) ([7e9f54f](https://github.com/tokyodrift1993/Ombi/commit/7e9f54fc80a09c938184e6be40ce5f49ce9673ef))



# [4.13.0](https://github.com/tokyodrift1993/Ombi/compare/v4.12.7...v4.13.0) (2022-02-25)


### Bug Fixes

* **4k:** Hide 'Has 4K Request' column list if 4k feature is disabled ([#4521](https://github.com/tokyodrift1993/Ombi/issues/4521)) ([a9a6067](https://github.com/tokyodrift1993/Ombi/commit/a9a60678e74d22fa7ba34051a2645db86b600b4a))
* **issues:** Fix label ID in chatbox page ([#4520](https://github.com/tokyodrift1993/Ombi/issues/4520)) ([76882ad](https://github.com/tokyodrift1993/Ombi/commit/76882adf231f92e1cdd396239933c13467c112b3))
* **localisation:** Localize request types in notifications ([#4516](https://github.com/tokyodrift1993/Ombi/issues/4516)) ([e09435d](https://github.com/tokyodrift1993/Ombi/commit/e09435da455b12fc429f129372de31e0654da797))
* **notifications:** Remove generic admin email in favour of admins' email ([#4519](https://github.com/tokyodrift1993/Ombi/issues/4519)) ([b90fc5f](https://github.com/tokyodrift1993/Ombi/commit/b90fc5fea771a83e6cf576c71a307066efd59ea4))
* **tv:** Display TV show as requested if all episodes are requested ([#4518](https://github.com/tokyodrift1993/Ombi/issues/4518)) ([2ed8c48](https://github.com/tokyodrift1993/Ombi/commit/2ed8c48d128a69f0d144c5d332286dbf3b0bdf28))


### Features

* **email-notifications:** Add a link to Ombi details page in email notifications ([#4517](https://github.com/tokyodrift1993/Ombi/issues/4517)) ([a3e97b3](https://github.com/tokyodrift1993/Ombi/commit/a3e97b31e2298d95e7deebd71268095b8ed5e9dc))
* **media-details:** Add Trakt to social icons ([#4522](https://github.com/tokyodrift1993/Ombi/issues/4522)) ([d6ae79c](https://github.com/tokyodrift1993/Ombi/commit/d6ae79ce9eddbd5b7b888ab1b9f7e342d9d9ff9e))



## [4.12.7](https://github.com/tokyodrift1993/Ombi/compare/v4.12.6...v4.12.7) (2022-02-23)



