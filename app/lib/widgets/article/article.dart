import 'package:flutter/material.dart';
import 'package:hack_n_heal/uikit/articleImage.dart';
import 'package:hack_n_heal/uikit/text.dart';
import 'package:hack_n_heal/uikit/title.dart';

class Article extends StatefulWidget {
  const Article({Key? key}) : super(key: key);

  @override
  State<Article> createState() => _ArticleState();
}

class _ArticleState extends State<Article> {
  @override
  Widget build(BuildContext context) {
    Map arguments = ModalRoute.of(context)?.settings.arguments as Map;

    return Scaffold(
        appBar: AppBar(title: const AppTitle().iconTitle('', context)),
        body: ListView(children: [
          ArticleImage(),
          ListTile(
            leading: AppText().tileTrailingText('${arguments['username']}'),
            trailing: AppText().tileTrailingText('date'),

          ),
          AppText().annotationText('title'),
          AppText().tileText('${arguments['content']}'),
          
        ]));
  }
}
