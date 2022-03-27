import 'package:flutter/material.dart';
import 'package:hack_n_heal/uikit/articleImage.dart';
import 'package:hack_n_heal/uikit/text.dart';
import 'package:hack_n_heal/uikit/title.dart';
import 'package:hack_n_heal/uikit/user_bookmark.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:intl/intl.dart';

class Article extends StatefulWidget {
  const Article({Key? key}) : super(key: key);

  @override
  State<Article> createState() => _ArticleState();
}

class _ArticleState extends State<Article> {
  @override
  Widget build(BuildContext context) {
    initializeDateFormatting('en_EN');
    Map arguments = ModalRoute.of(context)?.settings.arguments as Map;

    return Scaffold(
        appBar: AppBar(title: const AppTitle().iconTitle('', context)),
        body: ListView(children: [
          const ArticleImage(),
          ListTile(
            leading: UserBookmark(username: '${arguments['username']}'),
            trailing: const AppText().tileTrailingText(
                DateFormat('d MMMM yyyy', 'en_EN').format(
                    DateTime.fromMicrosecondsSinceEpoch(arguments['datetime']))),
          ),
          Container(
            margin: EdgeInsets.all(15),
            child: Column(
              children: [
                const AppText().annotationText('Title'),
                const AppText().tileText(arguments['content']),
              ],
            ),
          ),
        ]));
  }
}
