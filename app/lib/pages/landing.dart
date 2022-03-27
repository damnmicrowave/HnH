import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:hack_n_heal/uikit/button.dart';
import 'package:hack_n_heal/uikit/colors.dart';
import 'package:hack_n_heal/widgets/user.dart';

import '../uikit/modals.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
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
            _drawBarItem(Icons.group_outlined, "Topics", '/topics'),
            _drawBarItem(Icons.article_outlined, "Articles", '/articles'),
            _drawBarItem(
                Icons.volunteer_activism_outlined, "Partners", '/partners'),
          ],
        ),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(20.0),
            child: Text.rich(
              TextSpan(
                  text: 'Hello in ',
                  style: TextStyle(
                      fontSize: 24,
                      color: const AppColors().heading1Color(),
                      letterSpacing: 2),
                  children: [
                    const TextSpan(
                        text: 'ACE',
                        style: TextStyle(
                          fontWeight: FontWeight.w900,
                          color: Color(0xFF202C3D),
                        )),
                    const TextSpan(
                        text: 'hub! ',
                        style: TextStyle(fontWeight: FontWeight.w900)),
                    const TextSpan(text: "\n\nChildhood trauma is a "),
                    const TextSpan(
                        text: "problem ",
                        style: TextStyle(fontWeight: FontWeight.w900)),
                    const TextSpan(
                        text: "that's often overlooked in the modern world. "),
                    TextSpan(
                        text: "\n\nWe want to help you",
                        style: TextStyle(
                            color: const AppColors().darkColor(),
                            fontWeight: FontWeight.w800,
                            letterSpacing: 2)),
                  ]),
            ),
          ),
          Column(
            children: [
              const AppButton().bigButton('START QUIZ'),
              const AppButton().middleButton('LEAVE A REQUEST'),
              TextButton(
                onPressed: () {
                  const AppModal().showUnderstandDialog(
                      context,
                      'About us',
                      "Childhood trauma is a problem that's"
                          " often overlooked in the modern world. "
                          "There are various ways in which it manifests itself,"
                          " both in one's early years and adulthood. "
                          "It truly impacts all spheres of a person's life, "
                          "from mental to physical health, "
                          "from behavior to relationships. "
                          "Childhood trauma can ruin people's lives by making "
                          "it hard for them to develop and study at an average "
                          "pace. It lowers one's chances of getting a good "
                          "education, building a strong and healthy family,"
                          " and can significantly shorten an individual's life"
                          " span.All the terrible effects can be prevented. "
                          "Paying attention to children and creating safe spaces"
                          " for them can save thousands of lives, "
                          "as well as help improve the global quality of "
                          "life and ensure a greater future for everyone.");
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

  Widget _drawBarHeader() => const User();
}
