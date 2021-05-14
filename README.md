# dreamerslegacy-site
Remote of my local repo for my portfolio site, so I can access it across devices.  

Project is licensed under MIT, some assets may be licensed differently (namely resources redistributed from elsewhere).
Please send an inquiry if you are unsure if a source file is permitted for your usecase. 

Portions of the site's stylesheets were based off of https://www.w3schools.com/.

## PPA
Part of this portfolio site hosts the Personal Package Archive (PPA) for the distribution of my Debian packages. Add to APT to install its offerings.

From testing, I can inform you this will likely work on most Debian and Debian-based operating systems, including Raspbian, however expect broken dependencies for certain packages. 

To add the archive repository, run:
```commandline
sudo curl -s --compressed "https://dreamerslegacy.xyz/ppa/ubuntu/KEY.gpg" | sudo apt-key add -
sudo curl -s --compressed -o /etc/apt/sources.list.d/dreamerslegacy_ppa.list "https://dreamerslegacy.xyz/ppa/ubuntu/dreamerslegacy_ppa.list"
sudo apt update
```
To remove the archive repository, run:
```commandline
sudo apt-key del 9BBEC5D61BBD56C2CCC437D2A4891A46DC4C3713
sudo rm /etc/apt/sources.list.d/dreamerslegacy_ppa.list
sudo apt update
```

As you may have noticed, this is a rather unconventional method for installing packages. Normally, you would use `apt-add-repository`. This method simply adds an entry to the APT source list.

If typing out these commands is burdensome, see [this release](https://github.com/perpetualCreations/ppa/releases/tag/s1.0) for two shell scripts to automate this process (perhaps a bit pointless, considering the trouble you need to go through, compared to copy-and-pasting commands).
