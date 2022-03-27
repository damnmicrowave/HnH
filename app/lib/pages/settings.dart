import 'package:flutter/material.dart';
import 'package:hack_n_heal/uikit/title.dart';

class Settings extends StatefulWidget {
  const Settings({Key? key}) : super(key: key);

  @override
  State<Settings> createState() => _SettingsState();
}

class _SettingsState extends State<Settings> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: AppTitle().iconTitle('Settings', context),
      ),
      body: Container()
    );
  }
}

