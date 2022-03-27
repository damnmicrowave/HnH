import 'package:flutter/material.dart';
import 'package:hack_n_heal/uikit/colors.dart';
import 'package:hack_n_heal/uikit/text.dart';
import 'package:hack_n_heal/uikit/user_bookmark.dart';
import 'package:intl/date_symbol_data_local.dart';
import 'package:intl/intl.dart';

class ThreadCard extends StatefulWidget {
  const ThreadCard(
      {Key? key,
      required this.id,
      required this.name,
      required this.datetime,
      required this.username})
      : super(key: key);
  final String id;
  final String name;
  final int datetime;
  final String username;

  @override
  State<ThreadCard> createState() => _ThreadCardState();
}

class _ThreadCardState extends State<ThreadCard> {
  @override
  Widget build(BuildContext context) {
    initializeDateFormatting('en_EN');
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      child: Card(
          elevation: 2,
          child: ListTile(
            title: Column(
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Container(
                        width: 220,
                        height: 50,
                        padding: const EdgeInsets.only(top:12),
                        child: const AppText().tileText(widget.name)),
                    const AppText().tileTrailingText(
                        DateFormat('d MMMM yyyy', 'en_EN').format(
                            DateTime.fromMicrosecondsSinceEpoch(
                                widget.datetime)))
                  ],
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Container(
                      margin: const EdgeInsets.symmetric(vertical: 25),
                      decoration: BoxDecoration(
                          border: Border.all(
                            color: const AppColors().primaryColor(),
                          ),
                          borderRadius: BorderRadius.circular(5)),
                      child: TextButton(
                        child: const AppText().buttonText('View thread'),
                        onPressed: () {},
                      ),
                    ),
                    UserBookmark(username: widget.username)
                  ],
                )
              ],
            ),
          )),
    );
  }
}
