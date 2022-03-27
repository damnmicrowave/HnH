import 'package:flutter/material.dart';
import 'package:hack_n_heal/uikit/colors.dart';

class ArticleImage extends StatelessWidget {
  const ArticleImage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      width: double.infinity,
      alignment: Alignment.center,
      color: Colors.indigo[50],
      child: Icon(
        Icons.menu_book_outlined,
        color: Colors.indigo[200],
        size: 40,
      ),
    );
  }
}
