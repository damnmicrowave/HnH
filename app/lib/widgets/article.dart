import 'package:flutter/material.dart';
import 'package:hack_n_heal/uikit/articleImage.dart';
import 'package:hack_n_heal/uikit/colors.dart';
import 'package:hack_n_heal/uikit/text.dart';

class Article extends StatefulWidget {
  const Article({Key? key}) : super(key: key);

  @override
  State<Article> createState() => _ArticleState();
}

class _ArticleState extends State<Article> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.symmetric(horizontal: 10),
      color: AppColors().cardColor(),
      child: Card(
        child: Column(
          children: [
            ArticleImage(),
            Container(
              padding: EdgeInsets.all(10),
              child: AppText().tileText('Article'),
              height: 70,
              alignment: Alignment.center,
            )
          ],
        ),
      ),
    );
  }
}
