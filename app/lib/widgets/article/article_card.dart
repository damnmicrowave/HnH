import 'package:flutter/material.dart';
import 'package:hack_n_heal/uikit/articleImage.dart';
import 'package:hack_n_heal/uikit/colors.dart';
import 'package:hack_n_heal/uikit/text.dart';

class ArticleCard extends StatefulWidget {
  const ArticleCard({
    Key? key,
    required this.id,
    required this.name,
    required this.datetime,
    required this.username,
    required this.content,
  }) : super(key: key);

  final String id;
  final String name;
  final int datetime;
  final String username;
  final String content;

  @override
  State<ArticleCard> createState() => _ArticleCardState();
}

class _ArticleCardState extends State<ArticleCard> {
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 10),
      color: const AppColors().cardColor(),
      child: ElevatedButton(
        style: ButtonStyle(
          padding: MaterialStateProperty.all(EdgeInsets.zero),
          backgroundColor:
              MaterialStateProperty.all<Color>(const AppColors().cardColor()),
        ),
        onPressed: () {
          Navigator.pushNamed(context, '/article', arguments: {
            'id': widget.id,
            'title': widget.name,
            'datetime': widget.datetime,
            'username': widget.username,
            'content':widget.content
          });
        },
        child: Column(
          children: [
            const ArticleImage(),
            Container(
              padding: const EdgeInsets.all(10),
              child: ListTile(
                leading: SizedBox(
                    width: 200,
                    child: const AppText().tileText(widget.name)),
                trailing: const AppText().tileTrailingText('23.03.2025'),
              ),
              height: 65,
              alignment: Alignment.center,
            )
          ],
        ),
      ),
    );
  }
}
