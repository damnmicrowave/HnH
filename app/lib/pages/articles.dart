import 'package:flutter/material.dart';

import 'package:hack_n_heal/uikit/annotation.dart';

import 'package:hack_n_heal/uikit/title.dart';
import 'package:hack_n_heal/widgets/article.dart';

class Articles extends StatefulWidget {
  const Articles({Key? key}) : super(key: key);

  @override
  State<Articles> createState() => _ArticlesState();
}

class _ArticlesState extends State<Articles> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const AppTitle().iconTitle('Articles', context)),
      body: ListView(
        children: [
          Annotation().grey('Annotation'),
          Article()
        ],
      ),
    );
  }
}
