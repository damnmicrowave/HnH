import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

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
          './assets/images/logo.svg',
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.menu),
            iconSize: 40,
            onPressed: () {},
          )
        ],
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          const Text.rich(
            TextSpan(
                text: 'Hello in ',
                style: TextStyle(
                    fontSize: 24, color: Color(0xFF6288BD), letterSpacing: 2),
                children: [
                  TextSpan(
                      text: 'ACE',
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        color: Color(0xFF202C3D),
                      )),
                  TextSpan(
                      text: 'hub! \n',
                      style: TextStyle(fontWeight: FontWeight.bold)),
                  TextSpan(text: 'We do lalalaa'),
                ]),
          ),
          Column(
            children: [
              Container(
                height: 150,
                margin: const EdgeInsets.all(20),
                width: double.infinity,
                child: ElevatedButton(
                    onPressed: () {},
                    child: const Text('START QUIZ',
                        style: TextStyle(fontSize: 32))),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: const [
                  Text('*', style: TextStyle(color: Colors.red)),
                  Text(
                    'test will help you with this and that and',
                    overflow: TextOverflow.visible,
                    softWrap: true,
                  ),
                ],
              ),
            ],
          ),
        ],
      ),
    );
  }
}
