import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:hack_n_heal/uikit/button.dart';

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: SvgPicture.asset(
          './assets/files/logo.svg',
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.settings),
            onPressed: () {
              Navigator.pushNamed(context, '/settings');
            },
          )
        ],
      ),
      drawer: Drawer(
        // Левая боковая панель
        child: ListView(
          children: <Widget>[
            _drawBarHeader(),
            _drawBarItem(Icons.face, "My account", '/account'),
            _drawBarItem(
                Icons.supervised_user_circle, "Conversation", '/conversation'),
            _drawBarItem(Icons.article, "Articles", '/article'),
          ],
        ),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          const Padding(
            padding: EdgeInsets.all(10.0),
            child: Text.rich(
              TextSpan(
                  text: 'Hello in ',
                  style: TextStyle(
                      fontSize: 24, color: Color(0xFF6288BD), letterSpacing: 2),
                  children: [
                    TextSpan(
                        text: 'ACE',
                        style: TextStyle(
                          fontWeight: FontWeight.w900,
                          color: Color(0xFF202C3D),
                        )),
                    TextSpan(
                        text: 'hub! ',
                        style: TextStyle(fontWeight: FontWeight.w900)),
                    TextSpan(text: 'We do lalalaaxxxxxxxxxxx'),
                  ]),
            ),
          ),
          Column(
            children: [
              const AppButton().bigButton('START QUIZ'),
              const AppButton().middleButton('LEAVE A REQUEST'),
              TextButton(
                onPressed: () {
                  //Navigator.pushNamed(context, )
                },
                child: const Text(
                  'Learn more',
                  style: TextStyle(fontSize: 18),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _drawBarItem(icon, name, url) => ListTile(
        leading: Icon(icon, color: Colors.indigo),
        title: Text(
          name,
          textScaleFactor: 1.2,
        ),
        onTap: () {
          Navigator.of(context).pop(); // Скрыть боковую панель
          Navigator.pushNamed(context, url);
        },
      );

  Widget _drawBarHeader() => DrawerHeader(
        child: UserAccountsDrawerHeader(
          currentAccountPicture: Container(
              decoration: const BoxDecoration(
            shape: BoxShape.rectangle,
            color: Color(0x40F5F5FF),
          )),
          margin: EdgeInsets.zero,
          decoration: BoxDecoration(
            gradient:
                LinearGradient(colors: [Colors.indigo, Colors.indigo[300]!]),
          ),
          accountName: const Text('Shiza Marina'),
          accountEmail: const Text("shiza@hacknheal.aaaa"),
        ),
        padding: EdgeInsets.zero,
      );
}
