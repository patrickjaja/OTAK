echo "pso, neuen github Befehl anlegen f�r schnellen commit"
git config --global alias.commitall "!func(){ git add -A && git commit -am '$1' && git push origin master; }; func"