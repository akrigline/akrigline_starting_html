This is a customized starting file for an HTML web project. It's some frankenstein's monster of npm, bower, compass, and gulp. I'm still learning how these things all play together so it's probably messy.

After duplicating the folder, run:
npm install

And you should be good to go on gulp assuming you have gulp installed globally as well:
npm install -g gulp

Note that this needs compass to work:
gem install compass


gulp watch
will keep the style.css up to date whenever the scss files change.

Note that there's a hidden folder here .scss-cache, that will be copied if you just move the whole directory to a server.