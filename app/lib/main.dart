import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:hack_n_heal/pages/account.dart';
import 'package:hack_n_heal/pages/artictes.dart';
import 'package:hack_n_heal/pages/conversation.dart';
import 'package:hack_n_heal/pages/landing.dart';
import 'package:hack_n_heal/pages/settings.dart';

void main() {
  debugPaintSizeEnabled = false;
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Hack&Heal',
      theme: ThemeData(
        primarySwatch: Colors.indigo,
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => const MyHomePage(),
        '/account': (context) => const Account(),
        '/conversation': (context) => const Conversation(),
        '/settings': (context) => const Settings(),
        '/articles': (context) => const Articles(),
      },
    );
  }
}
