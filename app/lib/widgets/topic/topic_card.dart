import 'package:flutter/material.dart';
import 'package:hack_n_heal/uikit/colors.dart';
import 'package:hack_n_heal/uikit/modals.dart';
import 'package:hack_n_heal/uikit/text.dart';

class TopicCard extends StatefulWidget {
  final String title;
  final String id;

  const TopicCard({
    Key? key,
    required this.title,
    required this.id,

  }) : super(key: key);

  @override
  State<TopicCard> createState() => _TopicCardState();
}

class _TopicCardState extends State<TopicCard> {
  @override
  Widget build(BuildContext context) {
    return Card(
      borderOnForeground: true,
      child: ElevatedButton(
        style: ButtonStyle(
          padding: MaterialStateProperty.all(EdgeInsets.zero),
        ),
        onPressed: () {
          Navigator.pushNamed(context, '/topic', arguments:
            {'id': widget.id, 'title': widget.title}
          );
        },
        child: ListTile(
          tileColor: const AppColors().cardColor(),
          title: const AppText().tileText(widget.title),
          subtitle: const AppText().tileText('Popular'),
          trailing: IconButton(
            icon:
                Icon(Icons.info_outline, color: const AppColors().darkColor()),
            onPressed: () {
              const AppModal()
                  .showUnderstandDialog(context, widget.title, 'Information');
            },
          ),
        ),
      ),
    );
  }
}
