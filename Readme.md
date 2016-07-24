# Hello React Native

https://facebook.github.io/react-native/docs/getting-started.html

```
npm install
npm start
```

### run the emulator

```
android create avd -n test -t 1 --abi "default/x86_64"
emulator -avd test
```

### run the app

```
sudo npm install -g react-native-cli
react-native init AwesomeProject
cd AwesomeProject
adb reverse tcp:8081 tcp:8081   # might not be needed
npm start                       # run the packager (port 8081)
react-native run-android        # Building and installing the app on the device/emulator
shake phone, debug server host & port: 192.168.1.102:8081  also 'Enable Live Reload'
```

### misc

```
adb devices                                 # list of connected phones
emulator -list-avds                         # list of android virtual devices
android list targets
android list sdk --extended --no-ui --all
```

If you get error with inotify:
```
to apply on curren terminal: sudo sysctl fs.inotify.max_user_watches=524288
to apply on your OS: echo 524288 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
```

